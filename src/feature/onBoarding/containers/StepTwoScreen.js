import { Text } from '@ui-kitten/components';
import { Dimensions, Image, View } from 'react-native';
import useLanguage from '../../../hooks/useLanguage';
import Container from '../../../components/Container';
import Style from '../../../style/Style';
import Button from '../../../components/Button';
import Footer from '../../../components/Footer';
import STEP_TWO_STR from '../constants/StepTwoStr';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '../navigation/routes';

const StepTwoScreen = () => {
    const { languageCode } = useLanguage();
    const win = Dimensions.get('window');
    const ratio = win.width/360;
    const navigation = useNavigation();
    const onContinue = () => navigation.navigate(ROUTES.stepThree);
    
    return (
        <Container>
            <View style={[Style.flex_i, Style.pt_7]}>
                <Text style={[Style.headline_medium, Style.ta_c, Style.c_primary, Style.mb_7, Style.mh_6]}>
                    {STEP_TWO_STR.title[languageCode]}
                </Text>
                <Image
                    style={[
                        Style.mb_7,
                        Style.as_c,
                        {
                            width: win.width,
                            height: 405 * ratio,
                        }
                    ]}
                    source={require('../../../../assets/imagen_onboarding_dos.png')}
                />
                <Text style={[Style.body_large, Style.ta_c, Style.c_black, Style.mh_4]}>
                    {STEP_TWO_STR.subtitle[languageCode]}
                </Text>
            </View>
            <Footer>
                <Button
                    onPress={onContinue}
                >
                    {STEP_TWO_STR.button[languageCode]}
                </Button>
            </Footer>
        </Container>
    );
};

export default StepTwoScreen;
