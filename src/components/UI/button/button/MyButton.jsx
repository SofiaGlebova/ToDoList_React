import Icon from '../../Icon/Icon'
import classes from './MyButton.module.css'

const MyButton = ({ children, ...props }) => {
    return (
        <button {...props} className={`${classes.myBtn} ${props.className}`}>
            {!children && (
                <Icon 
                    name='icon-cross'
                    className={classes.icon}
                />
            )}
            {children}
        </button>
    )
}

export default MyButton;