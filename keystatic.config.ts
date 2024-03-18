// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    links: collection({
      label: "Links",
      slugField: "name",
      path: "src/content/links/*",
      format: { data: "json" },
      schema: {
        name: fields.slug({ name: { label: "Link Name" } }),
        url: fields.text({ label: "URL" }),
      },
    }),
  },
});
