import alien1 from '../../assets/images/alien/Shadow Stalker.png';
import alien2 from '../../assets/images/alien/Brute Behemoth.png';
import alien3 from '../../assets/images/alien/Mind Manipulator.png';
import alien4 from '../../assets/images/alien/Swarm Drones.png';
import alien5 from '../../assets/images/alien/Plasma Predator.png';

export const alienData = [
        {
            name: 'Shadow Stalkers',
            description: 'Shadow Stalkers are stealthy aliens that can blend into dark environments. They have sharp claws for swift attacks.',
            strengths: 'Stealth, blend into dark, sharp claws.',
            weaknesses: 'Sensitive to light, low endurance.',
            howToKill: 'Bright lights, aim for glowing eyes, firearms.',
            escape: 'Stay in light, use night vision, create noise distractions.',
            image: alien1,
        },
        {
            name: 'Brute Behemoths',
            description: 'Brute Behemoths are physically strong aliens with bullet-resistant armor. They can charge at high speed, causing massive damage.',
            strengths: 'Physical strength, bullet-resistant armor, fast charge.',
            weaknesses: 'Slow to turn, sensitive underbelly.',
            howToKill: 'Explosives, target underbelly, set traps.',
            escape: 'Keep distance, block paths, move quickly.',
            image: alien2,
        },
        {
            name: 'Mind Manipulators',
            description: 'Mind Manipulators are slender, ethereal aliens with tentacle-like appendages. They can project psychic waves to control or confuse their prey.',
            strengths: 'Psychic control, levitation, hard to detect.',
            weaknesses: 'Disrupted by EMPs, weak structure.',
            howToKill: 'EMP grenades, physical attacks, avoid eye contact.',
            escape: 'Use mind protection gear, avoid active areas, stay in groups.',
            image: alien3,
        },
        {
            name: 'Swarm Drones',
            description: 'Swarm Drones attack in large numbers with high speed and coordinated movements. They are fragile but dangerous in groups.',
            strengths: 'Large numbers, high speed, coordinated attacks.',
            weaknesses: 'Fragile, vulnerable to fire and gases.',
            howToKill: 'Flamethrowers, poison gas, target hive/queen.',
            escape: 'Create barriers, seek fortified shelter, use sound devices.',
            image: alien4,
        },
        {
            name: 'Plasma Predators',
            description: 'Plasma Predators use plasma attacks and are highly agile. They are resistant to conventional weapons but vulnerable to water.',
            strengths: 'Plasma attacks, high agility, resistant to conventional weapons.',
            weaknesses: 'Vulnerable to water, weaker at night.',
            howToKill: 'Water-based weapons, attack at night, high-caliber guns.',
            escape: 'Stay near water, move at night, use reflective surfaces.',
            image: alien5,
        }
];
