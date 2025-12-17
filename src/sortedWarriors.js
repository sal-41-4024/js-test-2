export default function sortedWarriors(warriors) {
  return warriors.slice().sort().sort((a, b) => b.health - a.health);
}
