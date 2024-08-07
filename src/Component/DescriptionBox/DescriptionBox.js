import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
    return (
        <div className='descriptionBox'>
            <div className='descriptionBox-navigator'>
                <div className='descriptionBox-nav-link'>Description</div>
                <div className='descriptionBox-nav-link fade'>Reviews {122}</div>
            </div>
            <div className='descriptionBox-description'>
                <p>An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.
                    It’s tough to imagine daily life without e-commerce. We order food, clothes, and furniture; we register for classes and other online services; we download books, music, and movies; and so much more. E-commerce has taken root and is here to stay.</p>
                <p>
                    You can sell just about anything through an eCommerce site. Examples include recreational equipment, car and motorcycle parts, household goods, clothing and jewelry, and food and drinks. If you need help coming up with additional ideas, consider these wholesale items to sell or high demand products.

                    The data generated by an eCommerce website isn’t only useful for sellers and buyers. It’s also used by shipping and handling providers, 3PL companies, marketers, and warehouse inventory management software.
                </p>
            </div>
        </div>
    )
}
