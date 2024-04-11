import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const roomNumbers = [19, 20, 34];
  return roomNumbers.map((number) => new ClassRoom(number));
}
