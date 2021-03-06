#= require colpick/js/colpick.js
#= require tooltipster/js/jquery.tooltipster.js

$ ->
  $previews = $('.previews li')
  $thresholdInput = $("[name='thresholdRange']")

  threshold = $thresholdInput.val()
  activeColor = 'C52D2F'

  toRGB = (hex) ->
    $.colpickHexToRgb(hex)

  toHSB = (hex) ->
    $.colpickHexToHsb(hex)

  updatePreviewColor = (hex) ->
    $previews.css('background-color', "##{hex}")

  updateButtons = (hex) ->
    hsb = toHSB(hex)
    rgb = toRGB(hex)
    updatePreviewColor(hex)
    updateHSB(hsb)
    updateHSL(hsb)
    updateArithmetic(rgb)
    updateGeometric(rgb)
    update3dDistance(rgb)
    updateW3c(rgb)
    update2dWeighted(rgb)
    update3dWeighted(rgb)
    return

  $thresholdInput.change ->
    threshold = $thresholdInput.val()
    updateButtons(activeColor)

  $(".widget").colpick
    flat: true
    layout: 'hex'
    submit: 0
    color: activeColor
    onChange: (hsb, hex, rgb, el, bySetColor) ->
      activeColor = hex
      updateButtons(activeColor)

  textColorString = (exp) ->
    color = if exp then 'black' else 'white'
    return color

  updateValue = (el, val) ->
    el.find('.value').text(val)

  # HSB Brightness
  $hsb = $previews.filter('.HSB')

  updateHSB = (hsb) ->
    color = textColorString(hsb.b > (threshold * 100))
    $hsb.css('color', color)
    updateValue($hsb, (hsb.b / 100).toFixed(2))

  # HSL Lightness
  $hsl = $previews.filter('.HSL')

  hslLightness = (hsb) ->
    return (200 - hsb.s) * hsb.b / 200

  updateHSL = (hsb) ->
    color = textColorString(hslLightness(hsb) > (threshold * 100))
    $hsl.css('color', color)
    updateValue($hsl, (hslLightness(hsb) / 100).toFixed(2))

  # Arithmetic
  $arithmetic = $previews.filter('.arithmetic')

  arithmeticLightness = (rgb) ->
    return ((rgb.r + rgb.g + rgb.b) / 3) / 255

  updateArithmetic = (rgb) ->
    color = textColorString(arithmeticLightness(rgb) > threshold)
    $arithmetic.css('color', color)
    updateValue($arithmetic, arithmeticLightness(rgb).toFixed(2))

  # Geometric
  $geometric = $previews.filter('.geometric')

  geometricLightness = (rgb) ->
    return Math.pow((rgb.r * rgb.g * rgb.b), 1/3) / 255

  updateGeometric = (rgb) ->
    color = textColorString(geometricLightness(rgb) > threshold)
    $geometric.css('color', color)
    updateValue($geometric, geometricLightness(rgb).toFixed(2))

  # 3D Distance
  $3dDistance = $previews.filter('.3D-distance')

  threeDimensionalDistanceLightness = (rgb) ->
      return Math.sqrt((Math.pow(rgb.r, 2) + Math.pow(rgb.g, 2) + Math.pow(rgb.b, 2))) / Math.sqrt(3 * Math.pow(255, 2))

  update3dDistance = (rgb) ->
    color = textColorString(threeDimensionalDistanceLightness(rgb) > threshold)
    $3dDistance.css('color', color)
    updateValue($3dDistance, threeDimensionalDistanceLightness(rgb).toFixed(2))

  # W3C Method
  $w3c = $previews.filter('.W3C')

  w3cLightness = (rgb) ->
     return ((rgb.r * 299 + rgb.g * 587 + rgb.b * 117) / 1000) / 255

  updateW3c = (rgb) ->
    color = textColorString(w3cLightness(rgb) > threshold)
    $w3c.css('color', color)
    updateValue($w3c, w3cLightness(rgb).toFixed(2))

  # 2D Weighted
  $luma = $previews.filter('.srgb-luma')

  twoDimensionalWeightedLightness = (rgb) ->
     return ((rgb.r * 212.6 + rgb.g * 715.2 + rgb.b * 72.2) / 1000) / 255

  update2dWeighted = (rgb) ->
    color = textColorString(twoDimensionalWeightedLightness(rgb) > threshold)
    $luma.css('color', color)
    updateValue($luma, twoDimensionalWeightedLightness(rgb).toFixed(2))

  # 3D Weighted
  $3dWeighted = $previews.filter('.3D-weighted')

  threeDimensionalWeightedLightness = (rgb) ->
     return Math.sqrt((0.299 * Math.pow(rgb.r, 2))+ (0.587 * Math.pow(rgb.g, 2)) + (0.114 * Math.pow(rgb.b, 2))) / 255

  update3dWeighted = (rgb) ->
    color = textColorString(threeDimensionalWeightedLightness(rgb) > threshold)
    $3dWeighted.css('color', color)
    updateValue($3dWeighted, threeDimensionalWeightedLightness(rgb).toFixed(2))

  updateButtons(activeColor)

  $previews.each ->
    elClass = $(@).attr('class')
    image = $("img.#{elClass}")
    $(@).tooltipster
      theme: 'tooltipster-shadow'
      content: image
