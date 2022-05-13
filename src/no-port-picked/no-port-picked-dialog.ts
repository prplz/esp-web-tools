import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "../components/ewt-dialog";
import "../components/ewt-button";
import { dialogStyles } from "../styles";

@customElement("ewt-no-port-picked-dialog")
class EwtNoPortPickedDialog extends LitElement {
  public doTryAgain?: () => void;

  public render() {
    return html`
      <ewt-dialog
        open
        heading="No port selected"
        scrimClickAction
        @closed=${this._handleClose}
      >
        <div>
          If your Reflow Master Pro was not listed, make sure it is in firmware update mode (found in settings).
        </div>
        ${this.doTryAgain
          ? html`
              <ewt-button
                slot="primaryAction"
                dialogAction="close"
                label="Try Again"
                @click=${this.doTryAgain}
              ></ewt-button>

              <ewt-button
                no-attention
                slot="secondaryAction"
                dialogAction="close"
                label="Cancel"
              ></ewt-button>
            `
          : html`
              <ewt-button
                slot="primaryAction"
                dialogAction="close"
                label="Close"
              ></ewt-button>
            `}
      </ewt-dialog>
    `;
  }

  private async _handleClose() {
    this.parentNode!.removeChild(this);
  }

  static styles = [
    dialogStyles,
    css`
      li + li,
      li > ul {
        margin-top: 8px;
      }
      ol {
        margin-bottom: 0;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "ewt-no-port-picked-dialog": EwtNoPortPickedDialog;
  }
}
