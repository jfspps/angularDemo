# How Angular Apps get loaded #

The files mentioned here can be found [here](./src/app). Other relevant files are located [here](./src).

`app.component.html` appears to handle the landing page loaded after running `ng serve`. Bootstrap CSS would also be running. However, the file served by Angular is the file `index.html` and represents the single-page application file.

In `index.html` there is a line `<app-root></app-root>` references the app folder files with the name `app.component` (there are four). The name `app-root` is declared in app-component.ts. The subsequent declaration of `app-root` in index.html then directs Angular to replace the content in index.html with the content from `app.component.html`.

The `ng serve` compiles and imports libraries. Their declaration can be viewed at runtime from the source code of the landing page.

In slightly more detail, chronologically:

1. The file `main.ts` is the first file that is run at runtime and contains a line `platformBrowserDynamic` runs `bootstrapModule`, passing `AppModule` which is represented by `app.module.ts`. TS files are TypeScript files.
2. The file `app.module.ts` contains an `@NgModule` array, `bootstrap: [AppComponent]` lists the components which Angular needs as it analyses `index.html`. These component files are the four files prefixed with `app.component`, in particular `app.component.ts`. One will see `app.component.html`, `app.component.css` and the `app-root` selector listed in `app.component.ts` which direct how Angular renders index.html.

In Angular, a component can be viewed as a section of the landing page which persists but is also dynamic. Apps typically contains several components. The files `app.component` represent the root component, from which other components can be nested.

Each component has its own HTML, CSS and business logic and is added to `app.component` not `index.html`. The files are usually stored in a subdirectory of the app folder.

The component files with the `spec.ts` postfix are required for testing purposes.