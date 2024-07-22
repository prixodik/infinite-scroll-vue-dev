<template>
  <header class="header js-header">
    <div class="header__container container">

      <div class="header__logo">
        <a href="/">
          <img class="header__logo-orange" src="/images/logo-orange.svg" alt="" />
          <img class="header__logo-white" src="/images/logo.svg" alt="" />
        </a>
      </div>

      <div class="socials-block header__soc">
        <a class="socials-block__icon" href="#">
          <svg class="icon icon-sprite-svg--soc-1">
            <use xlink:href="/images/sprite-svg.svg#sprite-svg--soc-1"></use>
          </svg>
        </a>
        <a class="socials-block__icon" href="#">
          <svg class="icon icon-sprite-svg--soc-2">
            <use xlink:href="/images/sprite-svg.svg#sprite-svg--soc-2"></use>
          </svg>
        </a>
        <a class="socials-block__icon" href="#">
          <svg class="icon icon-sprite-svg--soc-3">
            <use xlink:href="/images/sprite-svg.svg#sprite-svg--soc-3"></use>
          </svg>
        </a>
      </div>

    </div>
  </header>
</template>

<script>
/**
 * Компонент Header.
 * @component
 */
export default {
  name: 'HeaderSection',
}
</script>
