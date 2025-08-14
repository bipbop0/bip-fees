import React from 'react'

import { Button, Text, Screen, ScrollView, Navigator, reactExtension } from '@shopify/ui-extensions-react/point-of-sale'

const Modal = () => {
  return (
    <Navigator>
      <Screen name="Screen" title="Apply fees">
        <ScrollView>
          <Text>Welcome to the extension!</Text>
          <Button title="Fee1 Test" onPress={() => api.toast.show('Button tapped!')} />
        </ScrollView>
      </Screen>
    </Navigator>
  )
}

export default reactExtension('pos.home.modal.render', () => <Modal />);