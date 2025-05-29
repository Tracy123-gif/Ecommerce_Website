import  {useContext} from 'react';
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useToast
} from '@chakra-ui/react';
import {CgArrowRight} from 'react-icons/cg';
import {zodResolver} from '@hookform/resolvers/zod';
import {checkOutSchema} from '../../ValidateCheckOut';
import {useForm} from 'react-hook-form';
import {useValidate} from '../../UseValidate';
import {CartContext} from '../../CartContext';

const CheckOutContent = () => {
    const toast = useToast(); // Toast hook for success notification
    const {register, handleSubmit, formState: {
            errors
        }} = useForm({resolver: zodResolver(checkOutSchema)});

    const {checkOut} = useValidate();
    const {cart} = useContext(CartContext);

    //const [check, isCheck] = useState()

    const numOfProducts = cart.length;
    const shippingFee = cart.length * 5;

    // Handling form submission
    const onSubmit = (data) => {
        checkOut(data); // Call the checkout function

        // Show success toast
        toast({
            title: "Checkout Successful!", description: "Thank you for your purchase.", status: "success", duration: 5000, // 5 seconds
            isClosable: true,
            position: "top"
        });
    };

    return (
        <div>

            <Tabs align="center" variant="enclosed">
                <TabList>
                    <Tab>Card</Tab>
                    <Tab>Paypal</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div className="primary w-96 p-6 text-center m-auto rounded-2xl shadow-lg">
                            <div className="text-left">
                                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 w-full">
                                    <label>
                                        Name on card:
                                        <br/>

                                        <input
                                            className="w-80 h-10 border rounded-xl p-5"
                                            type="text"
                                            placeholder="Greg Thompson"
                                            {...register('name')}/> {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                                    </label>
                                    <label>
                                        Card number:
                                        <br/>
                                        <input
                                            className="w-80 h-10 border p-5 rounded-xl"
                                            type="number"
                                            placeholder="1111 2222 3333 4444"
                                            {...register('number')}/> {errors.number && <p className="text-red-500">{errors.number.message}</p>}
                                    </label>
                                    <div className="flex gap-4 flex-row">
                                        <label>
                                            Expiry date:
                                            <br/>
                                            <input
                                                className="h-10 border p-5 rounded-xl"
                                                type="date"
                                                {...register('expiryDate')}/> {errors.expiryDate && <p className="text-red-500">{errors.expiryDate.message}</p>}
                                        </label>
                                        <label>
                                            CVV:
                                            <br/>
                                            <input
                                                className="w-20 h-10 border p-5 rounded-xl"
                                                type="number"
                                                placeholder="123"
                                                {...register('cvv')}/> {errors.cvv && <p className="text-red-500">{errors.cvv.message}</p>}
                                        </label>
                                    </div>
                                    <label>
                                        Country located:
                                        <br/>
                                        <input
                                            className="w-80 h-10 border rounded-xl p-5"
                                            type="text"
                                            placeholder="USA"
                                            {...register('country')}/> {errors.country && <p className="text-red-500">{errors.country.message}</p>}
                                    </label>
                                    <label>
                                        Address Line 1:
                                        <br/>
                                        <input
                                            className="w-80 h-10 border rounded-xl p-5"
                                            type="text"
                                            placeholder="123 Main St"
                                            {...register('addressLine1')}/> {errors.addressLine1 && <p className="text-red-500">{errors.addressLine1.message}</p>}
                                    </label>
                                    <label>
                                        Address Line 2:
                                        <br/>
                                        <input
                                            className="w-80 h-10 border rounded-xl p-5"
                                            type="text"
                                            placeholder="Apt 4B"
                                            {...register('addressLine2')}/>
                                    </label>
                                    <div>
                                        <p>Number of products: {numOfProducts}</p>
                                        <p>Shipping fee: ${shippingFee}</p>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-black text-center justify-center text-white p-3 rounded-xl duration-300 border-black relative flex items-center gap-3 hover:bg-white  transition-all border ">
                                        <p className="text-white hover:text-gray-900 transition-all duration-300">Check Out</p>
                                        <CgArrowRight color="white" className="text-white"/>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <p>PayPal option</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default CheckOutContent;
