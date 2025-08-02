import { type ComponentType, type ReactNode, useEffect, useState } from "react";

let hydrating = true;

type WithClientOnlyProps = {
  fallback?: ReactNode;
};

const useHydrated = () => {
  const [hydrated, setHydrated] = useState(() => !hydrating);

  useEffect(function hydrate() {
    hydrating = false;
    setHydrated(true);
  }, []);

  return hydrated;
};

const withClientOnly = <P extends object>(
  WrappedComponent: ComponentType<P>,
  { fallback = null }: WithClientOnlyProps = {}
) => {
  return function WithClientOnlyComponent(props: P) {
    const isHydrated = useHydrated();

    if (!isHydrated) {
      return <>{fallback}</>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withClientOnly;
