#= require colpick/js/colpick.js
$ ->
  $previews = $('.previews li')


  $(".widget").colpick
    flat: true
    layout: 'hex'
    submit: 0
    color:'C52D2F'
    onChange: (hsb, hex, rgb, el, bySetColor) ->
      console.log hsb, rgb, hex
      updateButtons(hsb, rgb, hex)

  updateButtons = (hsb, rgb, hex) ->
    $previews.css('background-color', "##{hex}")
    updateArithmetic(rgb)
    updateGeometric(rgb)
    updateBrightest(rgb)
    updateDarkest(rgb)
    update3dDistance(rgb)
    updateHSL(hsb)
    updateW3c(rgb)
    update2dWeighted(rgb)
    update3dWeighted(rgb)
    return


  # Arithmetic
  $arithmetic = $previews.filter('.arithmetic')
  arithmeticLightness = (rgb) ->
    return (rgb.r + rgb.g + rgb.b) / 3

  updateArithmetic = (rgb) ->
    color = if arithmeticLightness(rgb) >= 255/2 then 'black' else 'white'
    $arithmetic.css('color', color)

  # Geometric
  $geometric = $previews.filter('.geometric')
  geometricLightness = (rgb) ->
    return Math.pow((rgb.r * rgb.g * rgb.b), 1/3)

  updateGeometric = (rgb) ->
    color = if geometricLightness(rgb) >= 255/2 then 'black' else 'white'
    $geometric.css('color', color)

  # Brightest
  $brightest = $previews.filter('.brightest')
  brightestLightness = (rgb) ->
    return Math.max(rgb.r, rgb.g, rgb.b)

  updateBrightest = (rgb) ->
    color = if brightestLightness(rgb) >= 255/2 then 'black' else 'white'
    $brightest.css('color', color)

  # Darkest
  $darkest = $previews.filter('.darkest')
  darkestLightness = (rgb) ->
    return Math.min(rgb.r, rgb.g, rgb.b)

  updateDarkest = (rgb) ->
    color = if darkestLightness(rgb) >= 255/2 then 'black' else 'white'
    $darkest.css('color', color)

  # 3D Distance
  $3dDistance = $previews.filter('.3D-distance')
  threeDimensionalDistanceLightness = (rgb) ->
      return Math.sqrt((Math.pow(rgb.r, 2) + Math.pow(rgb.g, 2) + Math.pow(rgb.b, 2)))

  update3dDistance = (rgb) ->
    color = if threeDimensionalDistanceLightness(rgb) >= Math.sqrt(3 * Math.pow(255, 2))/2 then 'black' else 'white'
    $3dDistance.css('color', color)

  # HSL Lightness
  $lightness = $previews.filter('.HSL')
  hslLightness = (hsb) ->
    return (200 - hsb.s) * hsb.b / 200

  updateHSL = (hsb) ->
    color = if hslLightness(hsb) >= 50  then 'black' else 'white'
    $lightness.css('color', color)

  # W3C Weighted
  $w3c = $previews.filter('.W3C')
  w3cLightness = (rgb) ->
     return (rgb.r * 299 + rgb.g * 587 + rgb.b * 117) / 1000

  updateW3c = (rgb) ->
    color = if w3cLightness(rgb) >= 255/2  then 'black' else 'white'
    $w3c.css('color', color)

  # 2D Weighted
  $2dWeighted = $previews.filter('.2D-weighted')
  twoDimensionalWeightedLightness = (rgb) ->
     return (rgb.r * 212.6 + rgb.g * 715.2 + rgb.b * 72.2) / 1000

  update2dWeighted = (rgb) ->
    color = if twoDimensionalWeightedLightness(rgb) >= 255/2  then 'black' else 'white'
    $2dWeighted.css('color', color)

  # 3D Weighted
  $3dWeighted = $previews.filter('.3D-weighted')
  threeDimensionalWeightedLightness = (rgb) ->
     return Math.sqrt((0.299 * Math.pow(rgb.r, 2))+ (0.587 * Math.pow(rgb.g, 2)) + (0.114 * Math.pow(rgb.b, 2)))

  update3dWeighted = (rgb) ->
    color = if threeDimensionalWeightedLightness(rgb) >= 255/2  then 'black' else 'white'
    $3dWeighted.css('color', color)

  updateButtons({h: 359.21, s: 77.15, b: 77.25}, {r: 197, g: 45, b: 47}, 'C52D2F')
