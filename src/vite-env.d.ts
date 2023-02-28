/// <reference types="svelte" />
/// <reference types="vite/client" />

// svelte-shim.d.ts
declare module "*.svelte" {
    import type { ComponentType } from "svelte";
    const component: ComponentType;
    export default component;
}