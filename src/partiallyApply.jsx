import { Button } from './composition'

export const partiallyApply = (Component, partialProps) => {
    return (props) => {
        return <Component {...partialProps} {...props} />
    }
}

export const DangerButton = partiallyApply(Button, { color: 'red' });
export const BigSuccessButton = partiallyApply(Button, { size: 'large', color: 'green' });