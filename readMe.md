
# Assistant Relay!

Assistant Relay is a Node.js server. It's exposed with SSDP, and runs an Express Web Server that allows for commands to be sent to the Google Assistant.

It also supports the Google Home Broadcast command, so unlike other TTS solutions that cast audio, Assistant Relay allows you to send audio notifications to your Google Home devices, without interrupting music.

# Pre-Release Status

Right now, this project is in a pre-release status.  Things may break, things might not work and there are probably quite a few bugs!  This repo comes with no support, just a best endeavour :)

# Installation

Download a copy of this repository and then use `npm install` to get started

## Configuration

Assistant Relay requires you to download an OAuth2 JSON file from Google.  To do this, please follow this guide: https://developers.google.com/assistant/sdk/guides/service/python/embed/config-dev-project-and-account
**Note: When creating an Oauth Client ID, make sure you use the "Other" application type**

Once you have downloaded your client secret file, copy it to the root folder of this project.

Open your command prompt in the Assistant Relay directory, and run:

    npm run build-config

This will add your chosen name and associated client secret into the config file
 You can add multiple users, however ensure that each user has correctly configured their Google account so that it is linked with your Google Home devices.


## Running the Relay

Now that the Assistant Relay is configured, start the relay with the command `node index.js`

This should open a web browser asking you to sign in to your Google account. Make sure you use the account linked to you Google Home/Assistant.

Once signed in, a code will be presented to you.  Copy this code into the terminal, and press enter.  Your Google Home should now notify you that the Assistant Relay is setup.

*Note: If your web browser does not open, follow the instructions in the terminal
This process will continue for each user you added to the config file.*

# Issuing a command

At the moment, it is only possible to issue a command to all Google Home devices. Additional support for Home Groups will be coming in the future.
For all of the below commands, it is possible to override the account that issues the command by adding the user parameter to the request, and matching it against the name you set it in the config file.

## Custom Broadcast

To send a Broadcast command, simply send a HTTP Post request:

    http://<ip_address>:3000/customBroadcast

with the following parameters:

    text: hello world
    user: <user in config>

The full request would be:

    http://<ip_address>:3000/customBroadcast?text=hello+world&user=>user in config>
The Google Home device will now play an audio alert, and say `Hello World`

## Preconfigured Broadcast

The Google Home also has a number of preconfigured broadcasts that have some fancy additions to them such as sound effects.  These can be found [here](https://support.google.com/googlehome/answer/7531913?co=GENIE.Platform=Android&hl=en):

Rather than configure these elsewhere, they are built into the Assistant Relay.  Simple send a request as follows:

    http://<ip_address>:3000/broadcast?preset=<command>&user=<config file user name>

**Available Commands**

 - wakeup
 - breakfast
 - lunch
 - dinner
 - timetoleave
 - arrivedhome
 - ontheway
 - movietime
 - tvtime
 - bedtime

*Note: Some of these preconfigured commands also say who triggered the command, such as the 'on the way' command. Since Assistant Relay only currently supports one user, this will automatically use the account for whoever setup Assistant Relay with their account*

## Nest Camera Streaming

If you want to start a stream from your Nest Cam to a Chromecast device, you can do this with the following request:

    http://<ip_address>:3000/nestStream?camera=<camera name>&chromecast=<chromecast_name>&user=<config file user name>

To stop a stream, send the following request:

    http://<ip_address>:3000/nestStream?stop=true&chromecast=<chromecast_name>

*Note: The user must have the Chromecast device in their account, and have the Nest camera assigned to their account*

## Custom commands

If you want to send a custom command to the Google Home (anything that would follow 'OK Google'), use the following request:

    http://<ip_address>:3000/custom?command=<custom command>&user=<config file user name>

# Credit
This project uses the google-assistant repository from endoplasmic
https://github.com/endoplasmic/google-assistant

## Donations
Whilst donations are appreciated, they are not expected, nor required.  If you're into Cryptocurrency, and want to buy me a drink, here are my wallets:

  - BTC: 19pi5ukYbeaZDLy5AS4Y8vFrZHQYxEG3YN
  - ETH: 0x1bdf8697b932B1674d7fa23A03E2Ce5A7B96af54
  - LTC: LNCQxsJ1reN8jhgMsUvdcdvgf55LHNMNgr

I can't figure out how to add a donate button for Paypal so that will have to wait :)
