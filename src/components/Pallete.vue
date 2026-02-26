<script setup lang="ts"></script>

<template>
    <div class="pallete">
        <h3>Pallete</h3>
        <div class="pallete-content">
            <div class="pallete-item">
                <div class="pallete-item-color"></div>
                <div class="pallete-item-name"></div>
            </div>
        </div>
    </div>  
</template>

<style lang="scss">

.pallete {
    @include flex-center;
    margin: 0 $spacing-4xl;
    display: flex;
    gap: 10px;
    .pallete-content {
        flex-direction: column;
        gap: 10px;
    }
}
</style>