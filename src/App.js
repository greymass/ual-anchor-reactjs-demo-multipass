// React and UI components for demo
import React, { Component } from 'react'

// The required ual-reactjs-renderer with ual-anchor, ual-scatter, and ual-ledger
import { Anchor } from 'ual-anchor'
import { Ledger } from 'ual-ledger'
import { Scatter } from 'ual-scatter'
import { UALProvider } from 'ual-reactjs-renderer'

// React components for this demo, not required
import { find } from 'lodash'
import blockchains from './assets/blockchains.json'
import Main from './Main'

// Define the app name for UAL
const appName = 'ual-reactjs-renderer-demo-multipass'

class App extends Component {
  // Demo initialization code
  constructor(props) {
    super(props)
    // Add the ability to retrieve the chainId from the URL
    const search = window.location.search
    const params = new URLSearchParams(search)
    const chainId = params.get('chainId') || '0db13ab9b321c37c0ba8481cb4681c2788b622c3abfd1f12f0e5353d44ba6e72'
    // Set initial application state with the default chainId
    this.state = {
      chainId,
    }
  }
  getAuthenticators = (chainId) => {
    const [ chain ] = blockchains.filter((c) => c.chainId === chainId)
    const anchor = new Anchor([chain], {
      // Required: The name of the app requesting a session
      //            This can be any string, preferably short, for wallets to display session information about.
      appName,
      // Optional: Enablethe browser transport success/failure messages instead of handling yourself
      requestStatus: true,
      // Optional: Set the callback service, which will default to https://cb.anchor.link
      service: 'https://cb.anchor.link',
      // Optional: Fuel by default is used to sign transactions for users with low resources.
      //            This can be disabled by setting disableGreymassFuel to true.
      // disableGreymassFuel: true,
      // Optional: Specify an account name to use as a referral for potential Fuel revenue sharing
      // fuelReferrer: 'jesta.x',
    })
    const ledger = new Ledger([chain])
    const scatter = new Scatter([chain], {
      appName
    })
    return [
      anchor,
      ledger,
      scatter
    ]
  }
  // React State Helper to update chainId while switching blockchains
  setChainId = (e, { value }) => this.setState({
    chainId: value
  }, () => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set('chainId', value)
    window.history.pushState(null, null, `?${searchParams.toString()}`)
  })
  render() {
    const {
      chainId,
    } = this.state
    // Find the blockchain information (rpc, name, etc) for UI purposes
    const chain = find(blockchains, { chainId })
    // Retrieve the authenticators for this chain for UAL
    const authenticators = this.getAuthenticators(chainId)
    // Return the UI
    return (
      <UALProvider
        appName={appName}
        authenticators={authenticators}
        chains={blockchains}
        key={chain.chainId}
      >
        <Main
          appName={appName}
          chain={chain}
          setChainId={this.setChainId}
          key={chain.chainId}
        />
      </UALProvider>
    )
  }
}

export default App
