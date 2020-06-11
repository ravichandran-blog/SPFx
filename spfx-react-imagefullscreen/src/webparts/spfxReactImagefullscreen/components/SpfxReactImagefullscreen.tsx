import * as React from 'react';
import { ISpfxReactImagefullscreenProps } from './ISpfxReactImagefullscreenProps';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
  '//placekitten.com/1500/500',
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500',
];

export interface ISpfxReactImagefullscreenState {
  photoIndex: number;
  isOpen: boolean;
}

export default class SpfxReactImagefullscreen extends React.Component<ISpfxReactImagefullscreenProps, ISpfxReactImagefullscreenState> {
  constructor(props: ISpfxReactImagefullscreenProps, state: ISpfxReactImagefullscreenState) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  public render(): React.ReactElement<ISpfxReactImagefullscreenProps> {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
