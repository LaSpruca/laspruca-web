import type {Writable} from "svelte/store";
import { writable } from "svelte/store";

export const showHeader: Writable<boolean> = writable(true)