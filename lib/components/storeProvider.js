import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps = () => ({})) => (Component) => {
    return class extends React.PureComponent {
        static displayName = `${Component.name}Container`;
        static contextTypes = {
            store: PropTypes.object,
        };

        onStoreChange = () => {
            if(this.subscribeId) {
                this.forceUpdate();
            }
        };

        componentDidMount() {
            this.subscribeId = this.context.store.subscribe(this.onStoreChange);
        }

        componentWillUnmount() {
            this.context.store.unsubscribe(this.subscribeId);
            this.subscribeId = null;
        }

        render() {

            return <Component
                {...this.props}
                {...extraProps(this.context.store, this.props)}
                store={this.context.store}
            />;
        }
    };
};

export default storeProvider;