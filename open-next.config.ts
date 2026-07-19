import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Les caches restent volontairement sur l'implémentation `dummy` tant
// qu'aucun binding R2 n'est déclaré dans wrangler.jsonc. Le helper officiel
// complète les wrappers, proxys et externals requis par OpenNext.
export default defineCloudflareConfig();
