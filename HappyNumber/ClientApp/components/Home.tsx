import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface fields {
    IsHappy: any;
}

export class Home extends React.Component<RouteComponentProps<{}>, fields> {
    constructor(props: RouteComponentProps<{}> | undefined) {
        super(props);

        this.state = {
            IsHappy: null
        }

        this.IsHappyNumber = this.IsHappyNumber.bind(this);
    }

    IsHappyNumber(event: any) {
            fetch('api/IsHappyNumber?number=' + event.target[0].value, {
                method: 'get'
            }).then((data) => data.json()) 
            .then(dataF => {
                this.setState(
                    {
                        IsHappy: dataF
                    });
            });
        event.preventDefault();
    }  
    public render() {
        return (<form onSubmit={this.IsHappyNumber}>
            <input id="number" />
            <input id="number" value={this.state.IsHappy ? "It's happy!" : "It's not happy!"} disabled />
            <input type="submit" value="Submit" />
        </form>);
    }
}
