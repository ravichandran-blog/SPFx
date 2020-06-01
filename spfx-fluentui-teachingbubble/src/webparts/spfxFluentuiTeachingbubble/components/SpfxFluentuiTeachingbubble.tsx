import * as React from 'react';
import { useState } from 'react';
import styles from './SpfxFluentuiTeachingbubble.module.scss';
import { ISpfxFluentuiTeachingbubbleProps } from './ISpfxFluentuiTeachingbubbleProps';
import { Rating, RatingSize } from 'office-ui-fabric-react/lib/Rating';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

function SpfxFluentuiTeachingbubble(props: ISpfxFluentuiTeachingbubbleProps) {
  const localvalue = localStorage.getItem('694bd607-18b6-4c53-b085-fdc985c8963e')
  const [bubble1, setBubble1] = useState(true)
  const [bubble2, setBubble2] = useState(false)
  const [bubble3, setBubble3] = useState(false)

  const options: IChoiceGroupOption[] = [
    { key: 'day', text: 'Day', iconProps: { iconName: 'CalendarDay' } },
    { key: 'week', text: 'Week', iconProps: { iconName: 'CalendarWeek' } },
    { key: 'month', text: 'Month', iconProps: { iconName: 'Calendar' }, disabled: true },
  ];

  const options2: IChoiceGroupOption[] = [
    {
      key: 'bar',
      imageAlt: 'Bar chart icon',
      text: 'Clustered bar chart',
      iconProps:{iconName:'StackedColumnChart2Fill'}
    },
    {
      key: 'pie',
      iconProps:{iconName:'PieDouble'},
      imageSize: { width: 32, height: 32 },
      text: 'Pie chart',
    },
  ];
  

  const dontshowmeagain = () => {
    localStorage.setItem('694bd607-18b6-4c53-b085-fdc985c8963e', 'done')
  }

  const bubble1Next: IButtonProps = React.useMemo(
    () => ({
      children: 'Next',
      onClick: () => { setBubble2(true); setBubble1(false) },
    }),
    [setBubble2, setBubble1],
  );

  const bubble1Dontshowagain: IButtonProps = React.useMemo(
    () => ({
      children: 'Close',
      onClick: () => { setBubble1(false), dontshowmeagain() },
    }),
    [setBubble1, dontshowmeagain],
  );

  const bubble2Previous: IButtonProps = React.useMemo(
    () => ({
      children: 'Previous',
      onClick: () => { setBubble1(true); setBubble2(false) },
    }),
    [setBubble2, setBubble1],
  );

  const bubble2Next: IButtonProps = React.useMemo(
    () => ({
      children: 'Next',
      onClick: () => { setBubble2(false); setBubble3(true) },
    }),
    [setBubble2, setBubble3],
  );

  const bubble3Previous: IButtonProps = React.useMemo(
    () => ({
      children: 'Previous',
      onClick: () => { setBubble2(true); setBubble3(false) },
    }),
    [setBubble2, setBubble3],
  );

  const bubble3Close: IButtonProps = React.useMemo(
    () => ({
      children: 'Close',
      onClick: () => { setBubble3(false), dontshowmeagain() },
    }),
    [setBubble3, dontshowmeagain],
  );



  return (
    <div className={styles.spfxFluentuiTeachingbubble}>
      <DefaultButton id={'targetButton'} href="http://bing.com" target="_blank" title="let us bing!" >
        Bing
      </DefaultButton>
      <br />
      <br />
      <ChoiceGroup width="300px" id={'targetChoice'} label="Pick one icon" defaultSelectedKey="day" options={options} />
      <br />
      <br />
      <ChoiceGroup id={'targetChoice2'} label="Pick one image" defaultSelectedKey="bar" options={options2} />;




      {bubble1 && (
        <TeachingBubble
          target="#targetButton"
          primaryButtonProps={bubble1Next}
          secondaryButtonProps={bubble1Dontshowagain}
          footerContent="1 of 3"
          headline="Discover what’s trending around you">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni
          harum non?
        </TeachingBubble>
      )}
      {bubble2 && (
        <TeachingBubble
          target="#targetChoice"
          primaryButtonProps={bubble2Next}
          secondaryButtonProps={bubble2Previous}
          footerContent="2 of 3"
          headline="Discover what’s trending around you">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni
          harum non?
        </TeachingBubble>
      )}
      {bubble3 && (
        <TeachingBubble
          target="#targetChoice2"
          primaryButtonProps={bubble3Close}
          secondaryButtonProps={bubble3Previous}
          footerContent="3 of 3"
          headline="Discover what’s trending around you">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni
          harum non?
        </TeachingBubble>
      )}
    </div>
  );
}

export default SpfxFluentuiTeachingbubble;