"use client";

import { useEffect } from "react";

import { useModals } from "@/providers/ModalProvider";

import RatingDisclaimerModal from "../RatingDisclaimerModal";

import { RankingDisclaimerModal } from "./components";


const RankingDisclaimer: React.FC = () => {
  const { openModal, closeModal } = useModals();

  const closeRankingDisclaimerModal = () => {
    closeModal("ranking-disclaimer-modal");
    localStorage.setItem("hasSeenRankingDisclaimer", "true");
  };

  const openRatingDisclaimerModal = () => {
    closeModal("ranking-disclaimer-modal");

    openModal(
      "rating-disclaimer-modal",
      <RatingDisclaimerModal closeModal={closeRatingDisclaimerModal} />
    );
  };

  const openRankingDisclaimerModal = () => {
    openModal(
      "ranking-disclaimer-modal",
      <RankingDisclaimerModal
        closeModal={closeRankingDisclaimerModal}
        openRatingDisclaimerModal={openRatingDisclaimerModal}
      />
    );
  };

  const closeRatingDisclaimerModal = () => {
    closeModal("rating-disclaimer-modal");
    openRankingDisclaimerModal();
  };

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem("hasSeenRankingDisclaimer");

    if (!hasSeenDisclaimer) openRankingDisclaimerModal();
  }, []);

  return null;
};

export default RankingDisclaimer;
