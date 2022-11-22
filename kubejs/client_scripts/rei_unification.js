
const DELETED_ITEMS = [
    "techreborn:quartz_dust",
    "techreborn:invar_storage_block",
    "indrev:tin_nugget",
    "techreborn:tin_nugget",
    "techreborn:chrome_storage_block",
    "techreborn:gold_plate",
    "create:golden_sheet",
    "indrev:gold_plate",
    "indrev:tin_ingot",
    "techreborn:tin_ingot",
    "deeperdarker:sculk_stone_iron_ore",
    "techreborn:lead_storage_block",
    "indrev:lead_block",
    "techreborn:raw_iridium_storage_block",
    "techreborn:raw_lead_storage_block",
    "indrev:raw_lead_block",
    "techreborn:zinc_storage_block",
    "techreborn:platinum_nugget",
    "techreborn:silicon_plate",
    "create:crushed_uranium_ore",
    "indrev:gold_dust",
    "create:crushed_gold_ore",
    "techreborn:deepslate_bauxite_ore",
    "techreborn:bauxite_ore",
    "techreborn:diamond_plate",
    "techreborn:aluminum_ingot",
    "indrev:tin_plate",
    "techreborn:tin_plate",
    "bewitchment:salt_block",
    "indrev:raw_silver",
    "techreborn:raw_silver",
    "bewitchment:silver_block",
    "indrev:silver_block",
    "techreborn:silver_storage_block",
    "techreborn:invar_dust",
    "create:crushed_tin_ore",
    "indrev:tin_dust",
    "croptopia:onion",
    "ad_astra:iron_rod",
    "catwalksinc:iron_rod",
    "techreborn:raw_tungsten",
    "indrev:raw_tungsten",
    "croptopia:tomato_seed",
    "techreborn:sulfur_dust",
    "indrev:sulfur_dust",
    "techreborn:iridium_ingot",
    "indrev:deepslate_silver_ore",
    "bewitchment:deepslate_silver_ore",
    "indrev:silver_ore",
    "bewitchment:silver_ore",
    "techreborn:chrome_nugget",
    "techreborn:tungsten_plate",
    "indrev:tungsten_plate",
    "techreborn:tungsten_ingot",
    "indrev:tungsten_ingot",
    "techreborn:invar_ingot",
    "indrev:iron_plate",
    "create:iron_sheet",
    "techreborn:iron_plate",
    "ad_astra:iron_plate",
    "indrev:electrum_nugget",
    "techreborn:electrum_nugget",
    "techreborn:bauxite_dust",
    "techreborn:emerald_plate",
    "indrev:bronze_ingot",
    "techreborn:bronze_ingot",
    "indrev:silver_nugget",
    "bewitchment:silver_nugget",
    "techreborn:silver_nugget",
    "indrev:steel_plate",
    "ad_astra:steel_plate",
    "techreborn:steel_plate",
    "indrev:silver_dust",
    "create:crushed_silver_ore",
    "techreborn:titanium_plate",
    "techreborn:iridium_ore",
    "techreborn:deepslate_iridium_ore",
    "techreborn:chrome_ingot",
    "tinycoal:tinycharcoal",
    "techreborn:carbon_plate",
    "techreborn:titanium_ingot",
    "techreborn:iridium_nugget",
    "techreborn:deepslate_tin_ore",
    "techreborn:tin_ore",
    "indrev:deepslate_tin_ore",
    "indrev:tin_ore",
    "indrev:iron_dust",
    "create:crushed_iron_ore",
    "create:crushed_lead_ore",
    "indrev:lead_dust",
    "techreborn:bronze_plate",
    "indrev:bronze_plate",
    "techreborn:electrum_storage_block",
    "indrev:electrum_block",
    "techreborn:raw_lead",
    "indrev:raw_lead",
    "croptopia:rice_seed",
    "croptopia:tomato",
    "techreborn:raw_iridium",
    "techreborn:platinum_plate",
    "techreborn:platinum_ingot",
    "techreborn:chrome_dust",
    "indrev:tungsten_block",
    "techreborn:tungsten_storage_block",
    "techreborn:manganese_dust",
    "techreborn:chrome_plate",
    "indrev:deepslate_tungsten_ore",
    "indrev:tungsten_ore",
    "techreborn:tungsten_ore",
    "techreborn:deepslate_tungsten_ore",
    "techreborn:electrum_dust",
    "indrev:electrum_dust",
    "techreborn:ruby_dust",
    "indrev:silver_plate",
    "techreborn:silver_plate",
    "indrev:electrum_plate",
    "techreborn:electrum_plate",
    "techreborn:ender_pearl_dust",
    "techreborn:raw_tin_storage_block",
    "indrev:raw_tin_block",
    "croptopia:salt_ore",
    "bewitchment:deepslate_salt_ore",
    "bewitchment:salt_ore",
    "croptopia:cabbage",
    "farmersdelight:cabbage_leaf",
    "techreborn:brass_ingot",
    "techreborn:titanium_dust",
    "techreborn:platinum_dust",
    "techreborn:titanium_storage_block",
    "techreborn:nickel_ingot",
    "indrev:steel_nugget",
    "ad_astra:steel_nugget",
    "techreborn:steel_nugget",
    "techreborn:zinc_dust",
    "indrev:steel_ingot",
    "techreborn:steel_ingot",
    "ad_astra:steel_ingot",
    "techreborn:aluminum_nugget",
    "hexcasting:amethyst_dust",
    "techreborn:lead_ore",
    "indrev:lead_ore",
    "indrev:deepslate_lead_ore",
    "techreborn:deepslate_lead_ore",
    "techreborn:invar_plate",
    "techreborn:lead_nugget",
    "indrev:lead_nugget",
    "techreborn:aluminum_dust",
    "bewitchment:salt",
    "techreborn:brass_plate",
    "techreborn:copper_nugget",
    "create:copper_nugget",
    "indrev:copper_nugget",
    "techreborn:brass_nugget",
    "techreborn:tungsten_nugget",
    "indrev:tungsten_nugget",
    "techreborn:emerald_dust",
    "techreborn:platinum_storage_block",
    "indrev:tungsten_dust",
    "techreborn:electrum_ingot",
    "indrev:electrum_ingot",
    "techreborn:bronze_storage_block",
    "indrev:bronze_block",
    "indrev:bronze_dust",
    "techreborn:bronze_dust",
    "techreborn:raw_tin",
    "indrev:raw_tin",
    "techreborn:nickel_storage_block",
    "techreborn:tin_storage_block",
    "indrev:tin_block",
    "techreborn:zinc_ingot",
    "techreborn:aluminum_storage_block",
    "indrev:coal_dust",
    "techreborn:coal_dust",
    "techreborn:iridium_plate",
    "techreborn:iridium_storage_block",
    "techreborn:bronze_nugget",
    "indrev:bronze_nugget",
    "techreborn:brass_storage_block",
    "indrev:copper_plate",
    "create:copper_sheet",
    "techreborn:copper_plate",
    "techreborn:lapis_plate",
    "create:crushed_nickel_ore",
    "techreborn:nickel_dust",
    "croptopia:cabbage_seed",
    "techreborn:invar_nugget",
    "croptopia:rice",
    "techreborn:steel_dust",
    "indrev:steel_dust",
    "indrev:raw_silver_block",
    "techreborn:raw_silver_storage_block",
    "bewitchment:raw_silver_block",
    "techreborn:zinc_nugget",
    "create:crushed_copper_ore",
    "indrev:copper_dust",
    "indrev:lead_plate",
    "techreborn:lead_plate",
    "techreborn:titanium_nugget",
    "techreborn:steel_storage_block",
    "ad_astra:steel_block",
    "indrev:steel_block",
    "techreborn:aluminum_plate",
    "indrev:silver_ingot",
    "techreborn:silver_ingot",
    "bewitchment:silver_ingot",
    "techreborn:raw_tungsten_storage_block",
    "indrev:raw_tungsten_block",
    "techreborn:nickel_plate",
    "techreborn:diamond_dust",
    "indrev:diamond_dust",
    "techreborn:nickel_nugget",
    "techreborn:lead_ingot",
    "indrev:lead_ingot"
];
REIEvents.hide('item', (event) => {
    DELETED_ITEMS.forEach(id => event.hide(id));
});
