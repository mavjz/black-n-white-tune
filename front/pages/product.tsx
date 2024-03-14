import ProductDescription from '@/components/container/product-description';
import React from 'react';

const Product = ({ product }) => {
    product = 'F122';
    return (
        <div>
            <ProductDescription
                name={product}
                brand="Yamaha"
                price="96.000 PLN"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed semper sem sit amet erat rutrum, eu facilisis dui consequat. Pellentesque 
                in sapien dignissim, egestas elit at, vestibulum dui. Phasellus efficitur quis 
                nisi convallis ultricies. In pulvinar imperdiet libero, in convallis orci convallis a. 
                Morbi imperdiet neque eu tortor interdum, quis volutpat velit maximus. 
                Aenean ut aliquam mauris. Cras nec nunc eu ipsum consectetur efficitur. 
                Nullam ut malesuada nunc, eu fermentum tellus. Sed vitae turpis at eros 
                porttitor efficitur ut id augue. Nulla blandit tincidunt finibus. Donec nec ex dolor. 
                Aliquam ut orci ac orci placerat ullamcorper a et eros. Vivamus tincidunt felis vitae felis suscipit pharetra."
                details="Vestibulum eu placerat ante. Curabitur ut magna id elit vestibulum suscipit. 
                Mauris aliquet vestibulum dui. Nunc mollis, nisl non tempus viverra, mi arcu elementum erat, 
                sed eleifend eros neque ac arcu. Nulla in luctus quam, quis maximus nisi. Praesent mi neque, 
                ultrices eget eleifend vitae, sodales vel mi. Phasellus ut nisl hendrerit, vehicula metus cursus, 
                eleifend nulla. Fusce euismod magna eget neque ornare auctor."
            />
        </div>
    );
};

export default Product;
