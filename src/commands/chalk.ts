export const disabled = false // Set to true to disable this command temporarily
export const plugin = 'chalk' // Set this for importing plugin config
export const command = 'chalk [string] [style]'
export const desc = 'chalk'
// export const aliases = ''
// export const middleware = (argv) => {}

export const builder = function (yargs: any) {
  yargs.option('template', { describe: 'Output chalk using template style', alias: 't' })
  yargs.option('demo', { describe: 'Output chalk color demo' })
}

export const handler = async function (argv: any) {
  const { Utils } = argv.$semo

  argv.template = Utils.pluginConfig('template', false)

  if (argv.demo) {
    const chalk = Utils.chalk
    const styles = [
      'bold',
      'dim',
      'italic',
      'underline',
      'inverse',
      'strikethrough',
      'black',
      'red',
      'green',
      'yellow',
      'blue',
      'magenta',
      'cyan',
      'white',
      'gray',
      'bgBlack',
      'bgRed',
      'bgGreen',
      'bgYellow',
      'bgBlue',
      'bgMagenta',
      'bgCyan',
      'bgWhite'
    ];
  
    console.log(styles.map(style => `${style} => ` + chalk[style](style)).join('\n'));
  }

  if (argv.string) {
    if (argv.style) {
      const style = Utils._.get(Utils.chalk, argv.style)
      if (style) {
        console.log(style(argv.string))
      }
    } else {
      if (argv.template) {
        const chalk = Utils.chalk
        const tagArray = [argv.string]
        // @ts-ignore
        tagArray.raw = tagArray
        console.log(chalk(tagArray))
      } else {
        console.log(argv.string)
      }
    }
  }

}
