import * as React from 'react';
import { Row, Col, Card, Slider, PageHeader, Divider } from 'antd';
import { AppConfig } from '../types/AppConfig';
import { StorageService } from '../service/storage-service';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './styles.scss';
import SwitchRow from '../components/switch-row-component';

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

  const onStateChange = (newState: AppConfig) => {
    setAppState(newState);

    StorageService.setConfig('no-bs-li-config', newState, function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs.length > 0 && tabs[0].id) {
          chrome.tabs.sendMessage(tabs[0].id, { action: "configChanged" });
        }
      });
    });


  }

  const toggleHideReactions = () => {

    const newState: AppConfig = {
      ...appState,
      hideReactions: !appState.hideReactions
    }

    onStateChange(newState);

  }

  const toggleHideSidebar = () => {
    const newState: AppConfig = {
      ...appState,
      hideSidebar: !appState.hideSidebar
    }

    onStateChange(newState);

  }

  const toggleHideMessageBubble = () => {
    const newState: AppConfig = {
      ...appState,
      hideMessageBubble: !appState.hideMessageBubble
    }

    onStateChange(newState);

  }

  const toggleHidePolls = () => {

    const newState: AppConfig = {
      ...appState,
      hidePolls: !appState.hidePolls
    }

    onStateChange(newState);

  }

  /*
  const toggleHideComments = () => {

    const newState: AppConfig = {
      ...appState,
      hideComments: !appState.hideComments
    }

    onStateChange(newState);

  }
  */

  const toggleHideFeedSource = () => {

    const newState: AppConfig = {
      ...appState,
      hideFeedSource: !appState.hideFeedSource
    }

    onStateChange(newState);

  }

  const setMarginOnPosts = (num: number) => {

    const newState: AppConfig = {
      ...appState,
      marginOnPosts: num
    }

    onStateChange(newState);

  }

  const setPaddingOnPosts = (num: number) => {

    const newState: AppConfig = {
      ...appState,
      paddingOnPosts: num
    }

    onStateChange(newState);
  }

  const setScale = (num: number) => {

    const newState: AppConfig = {
      ...appState,
      scale: num
    }

    onStateChange(newState);

  }

  return (
    <>
      <Card style={{ width: 400 }}>
        <Row>
          <Col span={24}>
            <PageHeader
              backIcon={false}
              className="site-page-header"
              onBack={() => null}
              title="No-BS-LI"
              subTitle="Browse cleaner LinkedIn"
            />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={12}>
            <label>Scale {appState.scale}</label>
          </Col>
          <Col span={12}>
            <Slider
              min={0}
              defaultValue={1}
              max={2}
              step={0.1}
              onChange={setScale}
              value={typeof appState.scale === 'number' ? appState.scale : 1}
            />
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <label>Padding on posts: {appState.paddingOnPosts}px</label>

          </Col>
          <Col span={12}>
            <Slider
              min={0}
              defaultValue={5}
              max={20}
              step={1}
              onChange={setPaddingOnPosts}
              value={typeof appState.paddingOnPosts === 'number' ? appState.paddingOnPosts : 5}
            />
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <label>Margin on posts: {appState.marginOnPosts}px</label>

          </Col>
          <Col span={12}>
            <Slider
              min={0}
              defaultValue={0}
              max={20}
              step={1}
              onChange={setMarginOnPosts}
              value={typeof appState.marginOnPosts === 'number' ? appState.marginOnPosts : 0}
            />
          </Col>
        </Row>

        <Divider />

        <SwitchRow
          label="Hide polls"
          onClick={toggleHidePolls}
          checked={appState.hidePolls}
          id={'hide-polls'}
        />
        <SwitchRow
          label="Hide feed source"
          onClick={toggleHideFeedSource}
          checked={appState.hideFeedSource}
          id={'hide-feed-source'}
        />
        <SwitchRow
          label="Hide sidebar"
          onClick={toggleHideSidebar}
          checked={appState.hideSidebar}
          id={'hide-sidebar'}
        />

        <SwitchRow
          label="Hide Message bubble"
          onClick={toggleHideMessageBubble}
          checked={appState.hideMessageBubble}
          id={'hide-message-bubble'}
        />

        <SwitchRow
          label="Hide reactions"
          onClick={toggleHideReactions}
          checked={appState.hideReactions}
          id={'hide-reactions'}
        />

        {/*
        <SwitchRow
          label="Hide comments"
          onClick={toggleHideComments}
          checked={appState.hideComments}
          id={'hide-comments'}
        />
        */}
      </Card>
    </>
  );
};

export default Popup;
