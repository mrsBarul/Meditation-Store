import cones from './picture/Cones.jpg';
import legginsLongsliv from './picture/legginsLongsliv.jpg';
import roller from './picture/roller.jpg';
import rubber from './picture/rubber.jpg';
import cloak from './picture/cloak.jpg';
import sticks from './picture/sticks.jpg';
import block from './picture/block.jpg';
import bookSubtleBody from './picture/bookSubtleBody.jpg';
import bookChakras from './picture/bookChakras.jpg';
import buddha from './picture/buddha.jpg';
import beads from './picture/beads.jpg';
import sportsuit from './picture/sportsuit.jpg';
import blueSage from './picture/blueSage.jpg';
import mat from './picture/mat.jpg';
import paloSanto from './picture/paloSanto.jpg';
import bookFlow from './picture/bookFlow.jpg';


export const dataStore = [
    {
        id: 1,
        name: 'Благовония - конусы',
        describe: 'Конусы дают стелющийся дым, который, в сочетании с ароматом наполняет ваш дом приятным и волнующим туманом.',
        searchTerm: 'incense',
        price: 1000,
        image: cones,
        showMore: false
    },

    {
        id: 2,
        name: 'Леггинсы + Лонгслив',
        describe: 'Собираясь на занятия, можете смело надеть цветные легинсы и лонгслив для йоги, которые повысят настроение и собственную самооценку.',
        searchTerm: 'clothes',
        price: 2500,
        image: legginsLongsliv,
        showMore: false
    },

    {
        id: 3,
        name: 'Массажный ролик',
        describe: 'Роллы позволяют расслабить мышцы, снять напряжение в теле.',
        searchTerm: 'inventory',
        price: 500,
        image: roller,
        showMore: false
    },

    {
        id: 4,
        name: 'Фитнес-резинка',
        describe: 'Этот очень простой и доступный инвентарь невероятно функционален и эффективен',
        searchTerm: 'inventory',
        price: 450,
        image: rubber,
        showMore: false
    },

    {
        id: 5,
        name: 'Дзен-плащ',
        describe: 'Плащ-палатка - буддистская святыня, в которую монах должен завернуть свою плоть.',
        searchTerm: 'clothes',
        price: 5500,
        image: cloak,
        showMore: false
    },

    {
        id: 6,
        name: 'Аромапалочки ',
        describe: 'Аромапалочки — это бамбуковые палочки, пропитанные эфирными маслами, которые наполняют пространство ароматным дымом при сжигании.',
        searchTerm: 'incense',
        price: 200,
        image: sticks,
        showMore: false
    },

    {
        id: 7,
        name: 'Блок',
        describe: 'Гладкий блок из твердого поролона, используемый как опора в йоге в качестве упражнения.',
        searchTerm: 'inventory',
        price: 600,
        image: block,
        showMore: false
    },

    {
        id: 8,
        name: 'Книга “Тонкое тело”',
        describe: 'В этой энциклопедии собрана информация о самых эффективных направлениях энергетической медицины: чакрах, рефлексологии, меридианах, акупунктуре и многом другом.',
        searchTerm: 'book',
        price: 750,
        image: bookSubtleBody,
        showMore: false
    },

    {
        id: 9,
        name: 'Книга “Чакры”',
        describe: 'В этой практичной энциклопедии собраны основные принципы и инструменты работы с главными энергетическими центрами – чакрами.',
        searchTerm: 'book',
        price: 650,
        image: bookChakras,
        showMore: false
    },

    {
        id: 10,
        name: 'Статуэтка “Будда”',
        describe: 'Когда такая статуэтка Будды появляется в доме, то вместе с ней приходит радость, удача, счастье, веселье, а также изобилие. Вот почему многие покупают фигурки Будды и украшают ими пространство вокруг себя.',
        searchTerm: 'inventory',
        price: 3000,
        image: buddha,
        showMore: false
    },

    {
        id: 11,
        name: 'Четки “Мала”',
        describe: 'Такого вида четки используются для отслеживания того, как человек читает, поет или мысленно повторяет мантру.',
        searchTerm: 'inventory',
        price: 1700,
        image: beads,
        showMore: false
    },

    {
        id: 12,
        name: 'Хлопковый костюм',
        describe: 'Легкий дышащий костюм из хлопка для медитаций или занятий йогой.',
        searchTerm: 'clothes',
        price: 3200,
        image: sportsuit,
        showMore: false
    },

    {
        id: 13,
        name: 'Связка “Шалфей”',
        describe: 'Благовоние с ароматом специй. Специальная связка, насыщающая пространство целебным запахом специй. Такой фимиам усиливает энергетику помещения.',
        searchTerm: 'incense',
        price: 550,
        image: blueSage,
        showMore: false
    },

    {
        id: 14,
        name: 'Коврик для йоги',
        describe: 'Специально изготовленный коврик, используемый для предотвращения скольжения рук и ног во время практики асан в современной йоге в качестве упражнений.',
        searchTerm: 'inventory',
        price: 800,
        image: mat,
        showMore: false
    },

    {
        id: 15,
        name: 'Palo Santo',
        describe: 'Уникальный аромат благовония обладает яркими древесными нотами, чем-то напоминающими ладан и мирру, с которыми дерево Пало Санто входит в одну группу.',
        searchTerm: 'incense',
        price: 700,
        image: paloSanto,
        showMore: false
    },

    {
        id: 16,
        name: 'Книга “В потоке”',
        describe: 'Книга поможет разобраться, как устроена ваша энергетика и система чакр, какие силы движут вами и вашими близкими и как привнести равновесие и гармонию в энергетические потоки, как вовне, так и внутри вас.',
        searchTerm: 'book',
        price: 650,
        image: bookFlow,
        showMore: false
    }
]