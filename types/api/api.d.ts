import { NextResponse } from "next/server";

// base types

export function GET(): NextResponse;

export type MonsterTextsType = {
  monster_id: number;
  lang_id: string;
  name: string;
  ecology: string;
  description: string;
  alt_state_description: null;
  monsterId: number;
};

export type MonsterType = {
  id: number;
  order_id: number;
  size: string;
  icon: null;
  pitfall_trap: boolean;
  shock_trap: boolean;
  vine_trap: boolean;
  has_weakness: boolean;
  has_alt_weakness: boolean;
  weakness_fire: number;
  weakness_water: number;
  weakness_ice: number;
  weakness_thunder: number;
  weakness_dragon: number;
  weakness_poison: number;
  weakness_sleep: number;
  weakness_paralysis: number;
  weakness_blast: number;
  weakness_stun: number;
  alt_weakness_fire: null;
  alt_weakness_water: null;
  alt_weakness_ice: null;
  alt_weakness_thunder: null;
  alt_weakness_dragon: null;
  alt_weakness_poison: null;
  alt_weakness_sleep: null;
  alt_weakness_paralysis: null;
  alt_weakness_blast: null;
  alt_weakness_stun: null;
  ailment_roar: string;
  ailment_wind: string;
  ailment_tremor: null;
  ailment_defensedown: boolean;
  ailment_fireblight: boolean;
  ailment_waterblight: boolean;
  ailment_thunderblight: boolean;
  ailment_iceblight: boolean;
  ailment_dragonblight: boolean;
  ailment_blastblight: boolean;
  ailment_regional: boolean;
  ailment_poison: boolean;
  ailment_sleep: boolean;
  ailment_paralysis: boolean;
  ailment_bleed: boolean;
  ailment_stun: boolean;
  ailment_mud: boolean;
  ailment_effluvia: boolean;
  monster_texts: MonsterText[];
};

export type MonsterHitzoneType = {
  id: number;
  monster_id: number;
  cut: number;
  impact: number;
  shot: number;
  fire: number;
  water: number;
  ice: number;
  thunder: number;
  dragon: number;
  ko: number;
  monsterId: number;
  monster_hitzone_texts: MonsterHitzoneText[];
};

export type MonsterHitzoneTextType = {
  monster_hitzone_id: number;
  lang_id: string;
  name: string;
  monsterHitzoneId: number;
};

// API responses

export type ListMonstersResponseType = {
  monsters: { id: number; name: string };
};

export type MonsterInfoResponseType = {
  monster: MonsterType;
  hitzones: MonsterHitzoneType[];
};
