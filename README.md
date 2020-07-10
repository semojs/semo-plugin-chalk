# semo-plugin-chalk

This is a `Semo` plugin to provide chalk feature in command line

## Installation

You can install this plugin globally

```bash
npm i -g @semo/cli semo-plugin-chalk
semo chalk --help

semo chalk [string] [style]

chalk

Options:
  --template, -t  Output chalk using template style
  --demo          Output chalk color demo
```

or you can even run it without installing it explicitily.

```bash
npm i -g @semo/cli
semo run chalk --
```


## Usage

Check style keywords

```bash
semo chalk --demo
```

Output string without styles, like bash `echo`

```bash
semo chalk "hello world"
```

Output string using chalk style

```bash
semo chalk "hello world" blue
```

Output string using chalk composable API

```bash
semo chalk "hello world" blue.underline
```

Output string using chalk tagged template literal

```bash
semo chalk "{red hello} {green world}" -t
```

## Configuration

You can set template option in configuration file `.semorc.yml`

```yml
$plugin:
  chalk:
    template: true
```