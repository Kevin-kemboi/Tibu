import { useContext } from 'react'
import PropTypes from 'prop-types'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id, image, name, price, quantityPriceList}) => {

    const {currency} = useContext(ShopContext);
  
    // Get the lowest price from quantity price list if available
    const getDisplayPrice = () => {
        if (!quantityPriceList) return price;

        try {
            // Parse the quantity price list if it's a string
            const priceList = typeof quantityPriceList === 'string' 
                ? JSON.parse(quantityPriceList) 
                : quantityPriceList;

            if (Array.isArray(priceList) && priceList.length > 0) {
                // Find the lowest price option
                const lowestPriceOption = priceList.reduce((min, current) => 
                    parseFloat(current.price) < parseFloat(min.price) ? current : min
                , priceList[0]);
                
                return `${lowestPriceOption.price} (${lowestPriceOption.quantity} units)`;
            }
        } catch (error) {
            console.error("Error parsing quantity price list:", error);
        }
        
        return price;
    };

    return (
        <Link className='group block text-gray-700 dark:text-gray-300 cursor-pointer' to={`/product/${id}`}>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-soft hover:shadow-medium transition-all duration-200 overflow-hidden border border-gray-100 dark:border-gray-700'>
                <div className='overflow-hidden aspect-square'>
                    <img className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out' src={image[0]} alt={name} />
                </div>
                <div className='p-4'>
                    <p className='text-sm font-open-sans font-medium text-gray-900 dark:text-gray-100 mb-2 line-clamp-2'>{name}</p>
                    <p className='text-lg font-roboto font-semibold text-primary-600 dark:text-primary-400'>{currency}{getDisplayPrice()}</p>
                </div>
            </div>
        </Link>
    )
}

ProductItem.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    quantityPriceList: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

export default ProductItem
