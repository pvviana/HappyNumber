import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <p>Digite um n�mero para saber se ele � feliz.</p>
            <input id="number" placeholder="Digite o n�mero" />
        </div>;
    }
}
