## To run App
```
pnpm i
pnpm dev
```

## To build App
```
pnpm build
```

## File Structure (Important files)
-- assets  
-- components  
&emsp;- shared  
&emsp;- layout.tsx  
-- context  
&emsp; - ThemeProvider.tsx  
-- pages  
-- public  
-- styles  
&emsp; - globals.css  
-- utils  

## Tech stack

- NextJS 12
- TypeScript
- TailwindCSS
- ReactIcons
- TypeWriter

## To make import easier
we can use @/ instead of using a bunch of `../` to get back to the root directory   
in tsconfig.json
```
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"],
      "@/assets": ["./assets/*"],
      "@/components": ["./components/*"],
      "@/context": ["./context/*"],
      "@/pages": ["./pages/*"],
      "@/public": ["./public/*"]
    }
  },
}

```