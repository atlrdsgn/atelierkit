// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///Users/chvndler/Projects/atlr.dsgn/atelierkit/node_modules/vite/dist/node/index.js";

// package.json
var peerDependencies = {
  react: "^18.2.0",
  "react-dom": "^18.2.0"
};

// vite.config.ts
import { vanillaExtractPlugin } from "file:///Users/chvndler/Projects/atlr.dsgn/atelierkit/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
import banner from "file:///Users/chvndler/Projects/atlr.dsgn/atelierkit/node_modules/vite-plugin-banner/dist/index.mjs";
import dts from "file:///Users/chvndler/Projects/atlr.dsgn/atelierkit/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/chvndler/Projects/atlr.dsgn/atelierkit/package/kit";
var peers = Object.keys(peerDependencies);
var primitiveDeps = [
  // ...deps
  "@radix-ui/react-avatar",
  "@radix-ui/react-switch"
];
var vite_config_default = defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      external: [...peers, ...primitiveDeps],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          /**
           *
           * named globals for primitive dependencies.
           */
          "@radix-ui/react-avatar": "AVI",
          // '@radix-ui/react-checkbox': 'CBX',
          // '@radix-ui/react-hover-card': 'HOVC',
          // '@radix-ui/react-label': 'LABL',
          // '@radix-ui/react-popover': 'POP',
          "@radix-ui/react-switch": "SWI"
          // '@radix-ui/react-select': 'SEL',
          // '@radix-ui/react-separator': 'SEP',
          // '@radix-ui/react-tooltip': 'TIP',
        }
      }
    },
    lib: {
      /**
       *
       * entry point for the package,
       * in library mode.
       *
       * https://vitejs.dev/guide/build.html#library-mode
       *
       */
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "kit",
      fileName: "index",
      formats: ["cjs", "es", "umd"]
    }
  },
  plugins: [
    banner(`
    atelierkit\xA9 v${process.env.npm_package_version}. 
    All rights reserved.
    
    see https://docs.atlrdsgn.com for more information.
    `),
    dts({
      outputDir: "dist/types",
      beforeWriteFile: (filePath, content) => ({
        content,
        filePath: filePath.replace("src", "")
      }),
      compilerOptions: {
        baseUrl: "./src/",
        emitDeclarationOnly: true,
        noEmit: false
      },
      include: ["src"],
      exclude: []
    }),
    vanillaExtractPlugin({
      /**
       *
       * identifier option can be set
       * to 'short' or 'debug' to control
       * how class names are generated.
       */
      identifiers: "debug"
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2Nodm5kbGVyL1Byb2plY3RzL2F0bHIuZHNnbi9hdGVsaWVya2l0L3BhY2thZ2Uva2l0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2h2bmRsZXIvUHJvamVjdHMvYXRsci5kc2duL2F0ZWxpZXJraXQvcGFja2FnZS9raXQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2Nodm5kbGVyL1Byb2plY3RzL2F0bHIuZHNnbi9hdGVsaWVya2l0L3BhY2thZ2Uva2l0L3ZpdGUuY29uZmlnLnRzXCI7LyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IHtyZXNvbHZlfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnXG5cbmltcG9ydCB7cGVlckRlcGVuZGVuY2llc30gZnJvbSAnLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQge3ZhbmlsbGFFeHRyYWN0UGx1Z2lufSBmcm9tICdAdmFuaWxsYS1leHRyYWN0L3ZpdGUtcGx1Z2luJ1xuaW1wb3J0IGJhbm5lciBmcm9tICd2aXRlLXBsdWdpbi1iYW5uZXInXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuY29uc3QgcGVlcnMgPSBPYmplY3Qua2V5cyhwZWVyRGVwZW5kZW5jaWVzKVxuY29uc3QgcHJpbWl0aXZlRGVwcyA9IFtcbiAgLy8gLi4uZGVwc1xuICAnQHJhZGl4LXVpL3JlYWN0LWF2YXRhcicsXG4gICdAcmFkaXgtdWkvcmVhY3Qtc3dpdGNoJyxcbl1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYnVpbGQ6IHtcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsuLi5wZWVycywgLi4ucHJpbWl0aXZlRGVwc10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICAgICdyZWFjdC1kb20nOiAnUmVhY3REb20nLFxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogbmFtZWQgZ2xvYmFscyBmb3IgcHJpbWl0aXZlIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWF2YXRhcic6ICdBVkknLFxuICAgICAgICAgIC8vICdAcmFkaXgtdWkvcmVhY3QtY2hlY2tib3gnOiAnQ0JYJyxcbiAgICAgICAgICAvLyAnQHJhZGl4LXVpL3JlYWN0LWhvdmVyLWNhcmQnOiAnSE9WQycsXG4gICAgICAgICAgLy8gJ0ByYWRpeC11aS9yZWFjdC1sYWJlbCc6ICdMQUJMJyxcbiAgICAgICAgICAvLyAnQHJhZGl4LXVpL3JlYWN0LXBvcG92ZXInOiAnUE9QJyxcbiAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LXN3aXRjaCc6ICdTV0knLFxuICAgICAgICAgIC8vICdAcmFkaXgtdWkvcmVhY3Qtc2VsZWN0JzogJ1NFTCcsXG4gICAgICAgICAgLy8gJ0ByYWRpeC11aS9yZWFjdC1zZXBhcmF0b3InOiAnU0VQJyxcbiAgICAgICAgICAvLyAnQHJhZGl4LXVpL3JlYWN0LXRvb2x0aXAnOiAnVElQJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBsaWI6IHtcbiAgICAgIC8qKlxuICAgICAgICpcbiAgICAgICAqIGVudHJ5IHBvaW50IGZvciB0aGUgcGFja2FnZSxcbiAgICAgICAqIGluIGxpYnJhcnkgbW9kZS5cbiAgICAgICAqXG4gICAgICAgKiBodHRwczovL3ZpdGVqcy5kZXYvZ3VpZGUvYnVpbGQuaHRtbCNsaWJyYXJ5LW1vZGVcbiAgICAgICAqXG4gICAgICAgKi9cbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLFxuICAgICAgbmFtZTogJ2tpdCcsXG4gICAgICBmaWxlTmFtZTogJ2luZGV4JyxcbiAgICAgIGZvcm1hdHM6IFsnY2pzJywgJ2VzJywgJ3VtZCddLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBiYW5uZXIoYFxuICAgIGF0ZWxpZXJraXRcdTAwQTkgdiR7cHJvY2Vzcy5lbnYubnBtX3BhY2thZ2VfdmVyc2lvbn0uIFxuICAgIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgXG4gICAgc2VlIGh0dHBzOi8vZG9jcy5hdGxyZHNnbi5jb20gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgYCksXG4gICAgZHRzKHtcbiAgICAgIG91dHB1dERpcjogJ2Rpc3QvdHlwZXMnLFxuICAgICAgYmVmb3JlV3JpdGVGaWxlOiAoZmlsZVBhdGgsIGNvbnRlbnQpID0+ICh7XG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIGZpbGVQYXRoOiBmaWxlUGF0aC5yZXBsYWNlKCdzcmMnLCAnJyksXG4gICAgICB9KSxcbiAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICBiYXNlVXJsOiAnLi9zcmMvJyxcbiAgICAgICAgZW1pdERlY2xhcmF0aW9uT25seTogdHJ1ZSxcbiAgICAgICAgbm9FbWl0OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiBbJ3NyYyddLFxuICAgICAgZXhjbHVkZTogW10sXG4gICAgfSksXG4gICAgdmFuaWxsYUV4dHJhY3RQbHVnaW4oe1xuICAgICAgLyoqXG4gICAgICAgKlxuICAgICAgICogaWRlbnRpZmllciBvcHRpb24gY2FuIGJlIHNldFxuICAgICAgICogdG8gJ3Nob3J0JyBvciAnZGVidWcnIHRvIGNvbnRyb2xcbiAgICAgICAqIGhvdyBjbGFzcyBuYW1lcyBhcmUgZ2VuZXJhdGVkLlxuICAgICAgICovXG4gICAgICBpZGVudGlmaWVyczogJ2RlYnVnJyxcbiAgICB9KSxcbiAgXSxcbn0pXG4iLCAie1xuICBcIm5hbWVcIjogXCJAYXRscmRzZ24va2l0XCIsXG4gIFwicGFja2FnZU1hbmFnZXJcIjogXCJ5YXJuQDMuMi4yXCIsXG4gIFwidmVyc2lvblwiOiBcIjAuMC44XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBdGVsaWVya2l0XCIsXG4gIFwiYXV0aG9yXCI6IFwiY2h2bmRsZXJcIixcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZG9jcy5hdGxyZHNnbi5jb21cIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwicmVwb3NpdG9yeVwiOiBcImF0bHJkc2duL2F0bHIua2l0XCIsXG4gIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgXCJhY2Nlc3NcIjogXCJwdWJsaWNcIlxuICB9LFxuICBcImZpbGVzXCI6IFtcbiAgICBcImRpc3RcIlxuICBdLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJtYWluXCI6IFwiLi9kaXN0L2luZGV4LnVtZC5janNcIixcbiAgXCJtb2R1bGVcIjogXCIuL2Rpc3QvaW5kZXguanNcIixcbiAgXCJ0eXBlc1wiOiBcIi4vZGlzdC90eXBlcy9pbmRleC5kLnRzXCIsXG4gIFwidHlwaW5nc1wiOiBcIi4vZGlzdC90eXBlcy9pbmRleC5kLnRzXCIsXG4gIFwiZXhwb3J0c1wiOiB7XG4gICAgXCIuXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvaW5kZXgudW1kLmNqc1wiXG4gICAgfSxcbiAgICBcIi4vc3R5bGVzXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L3N0eWxlLmNzc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0L3N0eWxlLmNzc1wiXG4gICAgfVxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJ2aXRlIGJ1aWxkXCIsXG4gICAgXCJidWlsZDp0eXBlc1wiOiBcInlhcm4gdHNjIC0tZW1pdERlY2xhcmF0aW9uT25seSAtLWRlY2xhcmF0aW9uIC0tZGVjbGFyYXRpb25EaXIgZGlzdC90eXBlc1wiLFxuICAgIFwibGludFwiOiBcImVzbGludCBzcmMgLS1leHQgLnRzXCIsXG4gICAgXCJjbGVhblwiOiBcInJtIC1yZiBub2RlX21vZHVsZXMgJiYgcm0gLXJmIGRpc3RcIixcbiAgICBcInJlbGVhc2VcIjogXCJucG0gcHVibGlzaCAtLWFjY2VzcyBwdWJsaWNcIixcbiAgICBcImRldjpyZWxlYXNlXCI6IFwibnBtIHB1Ymxpc2ggLS1hY2Nlc3MgcHJpdmF0ZVwiLFxuICAgIFwicHJldHR5XCI6IFwicHJldHRpZXIgLS13cml0ZSBzcmMvKiovKi57dHMsdHN4LGpzLGpzeCxqc29uLGNzcyxtZH1cIlxuICB9LFxuICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwicmVhY3RcIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCJeMTguMi4wXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHJhZGl4LXVpL3JlYWN0LWF2YXRhclwiOiBcIl4xLjAuMlwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LXN3aXRjaFwiOiBcIl4xLjAuMlwiLFxuICAgIFwiQHZhbmlsbGEtZXh0cmFjdC9jc3NcIjogXCJeMS4xMS4wXCIsXG4gICAgXCJAdmFuaWxsYS1leHRyYWN0L3JlY2lwZXNcIjogXCJeMC40LjBcIixcbiAgICBcIkB2YW5pbGxhLWV4dHJhY3Qvc3ByaW5rbGVzXCI6IFwiXjEuNS4yXCIsXG4gICAgXCJjbHN4XCI6IFwiXjEuMi4xXCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLWF0bHJcIjogXCIqXCIsXG4gICAgXCJyZWFjdFwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LWRvbVwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LXJlc3BvbnNpdmVcIjogXCJeOS4wLjJcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAYmFiZWwvY29yZVwiOiBcIl43LjIxLjRcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjE4LjE1LjExXCIsXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTguMC4zMVwiLFxuICAgIFwiQHR5cGVzL3JlYWN0LWRvbVwiOiBcIl4xOC4wLjExXCIsXG4gICAgXCJAdmFuaWxsYS1leHRyYWN0L3ZpdGUtcGx1Z2luXCI6IFwiXjMuOC4wXCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiOiBcIl4zLjEuMFwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjguMzcuMFwiLFxuICAgIFwicHJldHRpZXJcIjogXCJeMi44LjdcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS4wLjNcIixcbiAgICBcInZpdGVcIjogXCJeNC4yLjFcIixcbiAgICBcInZpdGUtcGx1Z2luLWJhbm5lclwiOiBcIl4wLjcuMFwiLFxuICAgIFwidml0ZS1wbHVnaW4tZHRzXCI6IFwiXjIuMS4wXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1wcm9ncmVzc1wiOiBcIl4wLjAuN1wiXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxTQUFRLGVBQWM7QUFDdEIsU0FBUSxvQkFBbUI7OztBQ29DekIsdUJBQW9CO0FBQUEsRUFDbEIsT0FBUztBQUFBLEVBQ1QsYUFBYTtBQUNmOzs7QURwQ0YsU0FBUSw0QkFBMkI7QUFDbkMsT0FBTyxZQUFZO0FBQ25CLE9BQU8sU0FBUztBQVJoQixJQUFNLG1DQUFtQztBQVV6QyxJQUFNLFFBQVEsT0FBTyxLQUFLLGdCQUFnQjtBQUMxQyxJQUFNLGdCQUFnQjtBQUFBO0FBQUEsRUFFcEI7QUFBQSxFQUNBO0FBQ0Y7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsSUFDWCxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsR0FBRyxPQUFPLEdBQUcsYUFBYTtBQUFBLE1BQ3JDLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBS2IsMEJBQTBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUsxQiwwQkFBMEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUk1QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BU0gsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsT0FBTyxNQUFNLEtBQUs7QUFBQSxJQUM5QjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxzQkFDUSxRQUFRLElBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUkxQjtBQUFBLElBQ0QsSUFBSTtBQUFBLE1BQ0YsV0FBVztBQUFBLE1BQ1gsaUJBQWlCLENBQUMsVUFBVSxhQUFhO0FBQUEsUUFDdkM7QUFBQSxRQUNBLFVBQVUsU0FBUyxRQUFRLE9BQU8sRUFBRTtBQUFBLE1BQ3RDO0FBQUEsTUFDQSxpQkFBaUI7QUFBQSxRQUNmLFNBQVM7QUFBQSxRQUNULHFCQUFxQjtBQUFBLFFBQ3JCLFFBQVE7QUFBQSxNQUNWO0FBQUEsTUFDQSxTQUFTLENBQUMsS0FBSztBQUFBLE1BQ2YsU0FBUyxDQUFDO0FBQUEsSUFDWixDQUFDO0FBQUEsSUFDRCxxQkFBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9uQixhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
