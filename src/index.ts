import {
  ICommandPalette
} from '@jupyterlab/apputils';

import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  Widget
} from '@phosphor/widgets';

import {
  Message
} from '@phosphor/messaging';

import '../style/index.css';

class GripQueryWidget extends Widget {
  /**
   * Construct a new xkcd widget.
   */
  constructor() {
    super();

    this.id = 'grip';
    this.title.label = 'GRIP';
    this.title.closable = true;
    //this.addClass('jp-xkcdWidget');

    this.txt = document.createElement('div');
    this.node.appendChild(this.txt);

    this.txt.insertAdjacentHTML('afterend',
      `This is where the GRIP Query Widget code would go`
    );
  }

  /**
   * The image element associated with the widget.
   */
  readonly txt: HTMLDivElement;

  /**
   * Handle update requests for the widget.
   */
  onUpdateRequest(msg: Message): void {

  }
};


/**
 * Initialization data for the griplab extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'griplab',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterLab, palette: ICommandPalette) => {
    console.log('JupyterLab extension griplab is activated!');
    console.log('ICommandPalette:', palette);

    // Create a single widget
    let widget: Widget = new GripQueryWidget();

    // Add an application command
    const command: string = 'grip:query';
    app.commands.addCommand(command, {
      label: 'Query',
      execute: () => {
        if (!widget.isAttached) {
          // Attach the widget to the main work area if it's not there
          app.shell.addToMainArea(widget);
        }
        // Activate the widget
        app.shell.activateById(widget.id);
      }
    });
    // Add the command to the palette.
    palette.addItem({command, category: 'GRIP'});
  }
};

export default extension;
