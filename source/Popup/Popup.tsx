import * as React from 'react';
import { Card } from 'rebass';
import { Label, Input, Switch, Slider } from '@rebass/forms'

import './styles.scss';
import { AppConfig } from '../types/AppConfig';
import { StorageService } from '../service/storage-service';

const Popup: React.FC = () => {

  const [appState, setAppState] = React.useState<AppConfig>({
    hideReactions: false,
    hideSidebar: false,
    hideMessageBubble: false,
    hidePolls: false,
    hideComments: false,
    hideFeedSource: false,
    paddingOnPosts: 0,
    marginOnPosts: 0,
    scale: 100
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

  const toggleHideMessageBubble = () => {
    const newState: AppConfig = {
      ...appState,
      hideMessageBubble: !appState.hideMessageBubble
    }

    setAppState(newState);

    StorageService.setConfig('no-bs-li-config', newState, function () {
      console.log(newState);
    });

  }

  const toggleHidePolls = () => {

    const newState: AppConfig = {
      ...appState,
      hidePolls: !appState.hidePolls
    }

    setAppState(newState);

    StorageService.setConfig('no-bs-li-config', newState, function () {
      console.log(newState);
    });

  }

  const toggleHideComments = () => {

    const newState: AppConfig = {
      ...appState,
      hideComments: !appState.hideComments
    }

    setAppState(newState);

    StorageService.setConfig('no-bs-li-config', newState, function () {
      console.log(newState);
    });

  }

  const toggleHideFeedSource = () => {

    const newState: AppConfig = {
      ...appState,
      hideFeedSource: !appState.hideFeedSource
    }

    setAppState(newState);

    StorageService.setConfig('no-bs-li-config', newState, function () {
      console.log(newState);
    });

  }

  const setMarginOnPosts = (e: React.ChangeEvent<HTMLInputElement>) => {

    const newState: AppConfig = {
      ...appState,
      marginOnPosts: parseInt(e.target.value)
    }

    setAppState(newState);

    StorageService.setConfig('no-bs-li-config', newState, function () {
      console.log(newState);
    });

  }

  const setPaddingOnPosts = (e: React.ChangeEvent<HTMLInputElement>) => {

    const newState: AppConfig = {
      ...appState,
      paddingOnPosts: parseInt(e.target.value)
    }

    setAppState(newState);

    StorageService.setConfig('no-bs-li-config', newState, function () {
      console.log(newState);
    });

  }

  const setScale = (e: React.ChangeEvent<HTMLInputElement>) => {

    const newState: AppConfig = {
      ...appState,
      scale: parseInt(e.target.value)
    }

    setAppState(newState);

    StorageService.setConfig('no-bs-li-config', newState, function () {
      console.log(newState);
    });

  }

  return (
    <div>
      <Card width={300} height={300}>

        <Label htmlFor='percent'>Scale {appState.scale}</Label>
        <Slider
          id='percent'
          name='percent'
          max={200}
          defaultValue={100}
          value={appState.scale}
          step={5}
          onChange={setScale}
        />


        <Label htmlFor='padding-on-posts'>Padding on posts</Label>
        <Input
          id='padding-on-posts'
          name='padding-on-posts'
          type='number'
          value={appState.paddingOnPosts}
          placeholder='0'
          onChange={setPaddingOnPosts}
        />

        <Label htmlFor='margin-on-posts'>Margin on posts</Label>
        <Input
          id='margin-on-posts'
          name='margin-on-posts'
          type='number'
          value={appState.marginOnPosts}
          placeholder='0'
          onChange={setMarginOnPosts}
        />

        <Label htmlFor='hide-feed-source'>Hide Feed source?</Label>
        <Switch id='hide-feed-source' name='hide-feed-source' checked={appState.hideFeedSource} onClick={() => toggleHideFeedSource()} />

        <Label htmlFor='hide-sidebar'>Hide Sidebars?</Label>
        <Switch id='hide-sidebar' name='hide-sidebar' checked={appState.hideSidebar} onClick={() => toggleHideSidebar()} />

        <Label htmlFor='hide-message-bubble'>Hide Message bubble?</Label>
        <Switch id='hide-message-bubble' name='hide-message-bubble' checked={appState.hideMessageBubble} onClick={() => toggleHideMessageBubble()} />

        <Label htmlFor='hide-message-bubble'>Hide Polls?</Label>
        <Switch id='hide-message-bubble' name='hide-message-bubble' checked={appState.hidePolls} onClick={() => toggleHidePolls()} />

        <Label htmlFor='hide-reactions'>Hide reactions?</Label>
        <Switch id='hide-reactions' name='hide-reactions' checked={appState.hideReactions} onClick={() => toggleHideReactions()} />

        <Label htmlFor='hide-comments'>Hide Comments?</Label>
        <Switch id='hide-comments' name='hide-comments' checked={appState.hideComments} onClick={() => toggleHideComments()} />
      </Card>
    </div>
  );
};

export default Popup;
