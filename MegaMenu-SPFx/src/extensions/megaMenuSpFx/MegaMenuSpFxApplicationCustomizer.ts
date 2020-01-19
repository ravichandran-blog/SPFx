import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';


import * as strings from 'MegaMenuSpFxApplicationCustomizerStrings';

const LOG_SOURCE: string = 'MegaMenuSpFxApplicationCustomizer';

require('./bulma.css');
const logo: any = require('./ravilogo.png');


export interface IMegaMenuSpFxApplicationCustomizerProperties {
  Top: string;
}




/** A Custom Action which can be run during execution of a Client Side Application */
export default class MegaMenuSpFxApplicationCustomizer
  extends BaseApplicationCustomizer<IMegaMenuSpFxApplicationCustomizerProperties> {
  // These have been added
  private _topPlaceholder: PlaceholderContent | undefined;
  private _bottomPlaceholder: PlaceholderContent | undefined;

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);
    this._renderPlaceHolders();
    return Promise.resolve<void>();
  }

  private _renderPlaceHolders(): void {
    console.log("HelloWorldApplicationCustomizer._renderPlaceHolders()");
    console.log(
      "Available placeholders: ",
      this.context.placeholderProvider.placeholderNames
        .map(name => PlaceholderName[name])
        .join(", ")
    );

    // Handling the top placeholder
    if (!this._topPlaceholder) {
      this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(
        PlaceholderName.Top,
        { onDispose: this._onDispose }
      );

      // The extension should not assume that the expected placeholder is available.
      if (!this._topPlaceholder) {
        console.error("The expected placeholder (Top) was not found.");
        return;
      }

      if (this.properties) {
        let topString: string = this.properties.Top;
        if (!topString) {
          topString = "(Top property was not defined.)";
        }

        if (this._topPlaceholder.domElement) {
          this._topPlaceholder.domElement.innerHTML = `
          <nav class="navbar ">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://ravichandran.blog/">
                <img src="${logo}" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
            </a>
            <div class="navbar-burger burger" data-target="navMenubd-example">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navMenubd-example" class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link  is-active" href="#">
                        Docs
                    </a>
                    <div class="navbar-dropdown ">
                        <a class="navbar-item " href="#">Overview</a>
                        <a class="navbar-item " href="#">Modifiers</a>
                        <a class="navbar-item " href="#">Columns</a>
                        <a class="navbar-item " href="#">Layout</a>
                        <a class="navbar-item " href="#">Form</a>
                        <a class="navbar-item " href="#">Elements</a>
                        <a class="navbar-item is-active" href="#">Components</a>
                        <hr class="navbar-divider">
                        <div class="navbar-item">
                            <div>
                                <p class="is-size-6-desktop">
                                    <strong class="has-text-info">0.5.1</strong>
                                </p>
                                <small>
                                    <a class="bd-view-all-versions" href="/versions">View all versions</a>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable is-mega">
                    <div class="navbar-link">
                        Blog
                    </div>
                    <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
                        <div class="container is-fluid">
                            <div class="columns">
                                <div class="column">
                                    <h1 class="title is-6 is-mega-menu-title">Sub Menu Title</h1>
                                    <a class="navbar-item" href="#">
                                        <div class="navbar-content">
                                            <p>
                                                <small class="has-text-info">03 Aug 2017</small>
                                            </p>
                                            <p>New feature: list of tags</p>
                                        </div>
                                    </a>
                                    <a class="navbar-item" href="#">
                                        <div class="navbar-content">
                                            <p>
                                                <small class="has-text-info">03 Aug 2017</small>
                                            </p>
                                            <p>New feature: list of tags</p>
                                        </div>
                                    </a>
                                    <a class="navbar-item" href="#">
                                        <div class="navbar-content">
                                            <p>
                                                <small class="has-text-info">03 Aug 2017</small>
                                            </p>
                                            <p>New feature: list of tags</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="column">
                                    <h1 class="title is-6 is-mega-menu-title">Sub Menu Title</h1>
                                    <a class="navbar-item" href="#">
                                        <div class="navbar-content">

                                            <p>
                                                <small class="has-text-info">03 Aug 2017</small>
                                            </p>
                                            <p>New feature: list of tags</p>
                                        </div>
                                    </a>
                                    <a class="navbar-item " href="#">
                                        Overview
                                    </a>
                                    <a class="navbar-item " href="#">
                                        Modifiers
                                    </a>
                                    <a class="navbar-item " href="#">
                                        Columns
                                    </a>
                                </div>
                                <div class="column">
                                    <h1 class="title is-6 is-mega-menu-title">Sub Menu Title</h1>
                                    <a class="navbar-item" href="#">
                                        <div class="navbar-content">
                                            <p>
                                                <small class="has-text-info">03 Aug 2017</small>
                                            </p>
                                            <p>New feature: list of tags</p>
                                        </div>
                                    </a>
                                    <a class="navbar-item" href="#">
                                        <div class="navbar-content">
                                            <p>
                                                <small class="has-text-info">03 Aug 2017</small>
                                            </p>
                                            <p>New feature: list of tags</p>
                                        </div>
                                    </a>
                                    <a class="navbar-item" href="#">
                                        <div class="navbar-content">
                                            <p>
                                                <small class="has-text-info">03 Aug 2017</small>
                                            </p>
                                            <p>New feature: list of tags</p>
                                        </div>
                                    </a>

                                </div>
                                <div class="column">
                                    <h1 class="title is-6 is-mega-menu-title">Sub Menu Title</h1>
                                    <a class="navbar-item " href="#">
                                        Overview
                                    </a>
                                    <a class="navbar-item " href="#">
                                        Modifiers
                                    </a>
                                    <a class="navbar-item " href="#">
                                        Columns
                                    </a>
                                    <a class="navbar-item " href="#">
                                        Layout
                                    </a>
                                </div>
                            </div>
                        </div>

                        <hr class="navbar-divider">
                        <div class="navbar-item">
                            <div class="navbar-content">
                                <div class="level is-mobile">
                                    <div class="level-left">
                                        <div class="level-item">
                                            <strong>Stay up to date!</strong>
                                        </div>
                                    </div>
                                    <div class="level-right">
                                        <div class="level-item">
                                            <a class="button bd-is-rss is-small" href="#">
                                                <span class="icon is-small">
                                                    <i class="fa fa-rss"></i>
                                                </span>
                                                <span>Subscribe</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                    <div class="navbar-link">
                        More
                    </div>
                    <div id="moreDropdown" class="navbar-dropdown ">
                        <a class="navbar-item " href="#">
                            <div class="level is-mobile">
                                <div class="level-left">
                                    <div class="level-item">
                                        <p>
                                            <strong>Extensions</strong>
                                            <br>
                                            <small>Side projects to enhance Bulma</small>
                                        </p>
                                    </div>
                                </div>
                                <div class="level-right">
                                    <div class="level-item">
                                        <span class="icon has-text-info">
                                            <i class="fa fa-plug"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <a class="navbar-item " href="https://ravichandran.blog/">
                     Blog
                </a>
            </div>
        </div>
    </nav>`;
        }
      }
    }
  }

  private _onDispose(): void {
    console.log('[HelloWorldApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
  }

}



