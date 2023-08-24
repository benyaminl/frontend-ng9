# FrontendNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.
This is my personal code repo for notes, not for real production code. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

For the server side rendering with express, refer to `https://angular.io/guide/universal#useful-scripts`, to run simply `npm run dev:ssr`

## Production server SSR

For production, we can run `node dist/server/main.js`, and user docker for deployment, as js app always exit when facing error. 

## Building for production 

### SSR / Server Side rendering

Just run `podman build -t frontend-ng:server -f Dockerfile.Server`

You can replace `podman` with `docker` command. I don't like docker as it's slow in local dev, podman is faster, leaner, and much more secure (even on local, especially with RHEL)

### Normal Lazy Load - Client Side 

Just run `podman build -t frontend-ng .` or `podman build -t frontend-ng -f Dockerfile`

You can replace `podman` with `docker` command. I don't like docker as it's slow in local dev, podman is faster, leaner, and much more secure (even on local, especially with RHEL)