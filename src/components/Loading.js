import '../styles/Loading.scss';

function loading(props){
    return(
        <span className={props.isLoading ? props.loading : '' } />
    )
}
export default loading;