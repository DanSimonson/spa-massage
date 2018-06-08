<template>
    <div id="product-list-two" class="teal accent-4">
        <h2>Specialty Massage</h2>
        <ul>
            <li v-for="product2 in products2">
                <span class="name">{{ product2.name }}</span>
                <span class="price">P{{ product2.price }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['products2'],
        data() {
            return {
            }
        }
    }
</script>

<style scoped>
    #product-list-two {
        background: #D1E4FF;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
        margin-bottom: 30px;
        padding: 10px 20px;
    }

    #product-list-two ul {
        padding: 0;
        list-style-type: none;
    }

    #product-list-two li {
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255, 255, 255, 0.7);
    }

    .price {
        font-weight: bold;
        color: #E8800C;
        display: block;
    }
</style>