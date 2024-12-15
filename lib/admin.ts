//bytequest/lib/admin.ts
import { auth } from "@clerk/nextjs/server"

const adminIds = [
  "user_2q9VzBeXHqvEyH7G8GMmVvJ4ZgP",
];

export const isAdmin = async() => {
  const { userId } = await auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};