# This is a hello world of a project, and doesn't actually do anything


# griplab

GRIP viewer


## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install griplab
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
npm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```
