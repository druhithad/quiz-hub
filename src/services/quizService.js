import { db } from "./firebase";
import { ref, set, get } from "firebase/database";

// Save score
export const saveScore = async (userId, score) => {
  await set(ref(db, "scores/" + userId), {
    score: score,
    timestamp: Date.now()
  });
};

// Get leaderboard
export const getLeaderboard = async () => {
  const snapshot = await get(ref(db, "scores"));
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return {};
  }
};