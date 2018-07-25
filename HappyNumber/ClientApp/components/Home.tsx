import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <p>Digite um número para saber se ele é feliz.</p>
            <input id="number" placeholder="Digite o número" />
        </div>;
    }
}
