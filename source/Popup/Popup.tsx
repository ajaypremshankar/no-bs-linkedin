import * as React from 'react';
import { Card } from 'rebass';
import { Label, Slider, Switch } from '@rebass/forms'

import './styles.scss';
import { AppConfig } from '../types/AppConfig';
import { StorageService } from '../service/storage-service';

const Popup: React.FC = () => {

  const [appState, setAppState] = React.useState<AppConfig>({
    hideReactions: false,
    hideSidebar: false
  });

  React.useEffect(() => {
    StorageService.getConfig("no-bs-li-config", function (config) {
      setAppState(config);
    });
  }, []);

  const toggleHideReactions = () => {

    const newState: AppConfig = {
      ...appState,
      hideReactions: !appState.hideReactions
    }

    setAppState(newState);

    StorageService.setConfig('no-bs-li-config', newState, function () {
      console.log(newState);
    });

  }

  const toggleHideSidebar = () => {
    const newState: AppConfig = {
      ...appState,
      hideSidebar: !appState.hideSidebar
    }

    setAppState(newState);

    StorageService.setConfig('no-bs-li-config', newState, function () {
      console.log(newState);
    });

  }

  return (
    <div>
      <Card width={300} height={300}>
        <Label htmlFor='percent'>Zoom</Label>
        <Slider
          id='percent'
          name='percent'
          defaultValue={25}
        />

        <Label htmlFor='hide-reactions'>Hide reactions?</Label>
        <Switch id='hide-reactions' name='hide-reactions' checked={appState.hideReactions} onClick={() => toggleHideReactions()} />

        <Label htmlFor='hide-sidebar'>Hide Sidebars?</Label>
        <Switch id='hide-sidebar' name='hide-sidebar' checked={appState.hideSidebar} onClick={() => toggleHideSidebar()} />
      </Card>
    </div>
  );
};

export default Popup;
