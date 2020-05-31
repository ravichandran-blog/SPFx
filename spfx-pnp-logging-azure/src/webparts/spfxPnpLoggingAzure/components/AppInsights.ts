import { ApplicationInsights } from '@microsoft/applicationinsights-web'
import { ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js'
import { createBrowserHistory } from "history";


const reactPlugin = new ReactPlugin();
const ai = new ApplicationInsights({
    config: {
        instrumentationKey: '6c0f2fd6-76a0-4671-9fad-e3c75ee02901',
        extensions: [reactPlugin],
        extensionConfig: {
            [reactPlugin.identifier]: { history: createBrowserHistory }
        }
    }
})
ai.loadAppInsights()

export default (Component) => withAITracking(reactPlugin, Component)
export const appInsights = ai.appInsights
