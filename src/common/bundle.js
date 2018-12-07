import React, {Component} from 'react' 

class Bundle extends Component{
    state={
        mod: null
    }
    componentWillMount(){
        this.load(this.props)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.load !== this.props.load){
            this.load(nextProps)
        }
    }
    load(props){
        props.load().then((mod) =>{
            this.setState({
                mod: mod.default? mod.default: mod
            })
        })
    }
    render(){
        if(!this.state.mod){
            return false
        }
        return this.props.children(this.state.mod)
    }
}
export default Bundle