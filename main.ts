namespace custom {
    //% blockIdentity="blocks.block" enumIdentity="Block.DiamondOre"
    const DIAMOND_ORE = Block.DiamondOre;
    //% blockId=my_extension_name_mob_argument
    //% block="mob argument $mob"
    //% mob.shadow=minecraftAnimal
    //% mob.defl=AnimalMob.Squid
    export function mobArgument(mob: number) {

    }

    //% blockId=my_extension_name_monster_argument
    //% block="monster argument $monster"
    //% monster.shadow=minecraftMonster
    //% monster.defl=MonsterMob.Skeleton
    export function monsterArgument(monster: number) {

    }

    //% blockId=my_extension_name_block_argument
    //% block="block argument $blockArg"
    //% blockArg.shadow=minecraftBlock
    //% blockArg.defl=Block.DiamondBlock
    export function blockArgument(blockArg: number) {

    }

    //% blockId=my_extension_name_item_argument
    //% block="item argument $item"
    //% item.shadow=minecraftItem
    //% item.defl=Item.GoldIngot
    export function itemArgument(item: number) {

    }
}
