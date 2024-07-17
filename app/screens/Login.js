import { ScrollView ,StyleSheet} from 'react-native';
import LoginForm from "../components/Login/LoginForm"
export default function LoginPage(){

    return(
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <LoginForm/>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      paddingBottom: 20, 
    },
  });